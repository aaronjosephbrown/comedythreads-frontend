import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext} from 'react'
import { useDispatch } from 'react-redux'
import { getUserByUsername } from '../../features/auth/authSlice'
import LikeButton from '../../components/ThreadComponets/Buttons/LikeButton'
import LikeCounter from '../../components/ThreadComponets/LikeCounter'
import ThreadDropMenu from '../../components/ThreadComponets/ThreadDropMenu'
import CommentButton from '../../components/ThreadComponets/Buttons/CommentButton'
import CommentModal from '../../components/ThreadComponets/Modals/CommentModal'
import { timeSince } from '../../utils/timeSince'
import { refreshContext } from '../../features/context/RefreshContext'

const Threads = () => {
  let { username } = useParams()
  const dispatch = useDispatch()
  const [user, setUser] = useState('')
  const [elapsedTimes, setElapsedTimes] = useState({})
  const [open, setOpen] = useState(false)
  const [commentThread, setCommentThread] = useState({})
  const { refresh } = useContext(refreshContext)

  useEffect(() => {
    dispatch(getUserByUsername(username)).then((res) => {
      setUser(res.payload)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, username, refresh])

  const updateElapsedTimes = () => {
    const newElapsedTimes = {}
    user.threads?.forEach((thread) => {
      newElapsedTimes[thread._id] = timeSince(thread.createdAt)
    })
    setElapsedTimes(newElapsedTimes)
  }

  useEffect(() => {
    updateElapsedTimes()
    const intervalId = setInterval(() => {
      updateElapsedTimes()
    }, 1000)
    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.threads])

  return (
    <div className='sm:px-6 lg:px-8 max-w-3xl px-2 mx-auto text-white'>
      <section className='h-30 grid grid-cols-4 mt-6'>
        <div className='flex h-32'>
          <img src={user.avatar} alt='profile' className='h-32 rounded-full' />
        </div>
        <div>
          <h1 className='text-md font-semibold'>{username}</h1>
          <div className='mt-5'>
            <p>bio: {user?.bio}</p>
            <p>joined: {user?.joined}</p>
          </div>
        </div>
      </section>
      <section className='h-30 mt-6'>
        <div className='flex flex-col h-32'>
          <ul className='flex flex-col space-y-5'>
            {user.threads?.length > 0 &&
              user.threads.toReversed().map((thread, i) => (
                <li
                  key={thread._id || i}
                  className='flex justify-between text-sm font-light border-t border-[#777777] pt-2'
                >
                  <div className='py-3'>
                    <div className='whitespace-nowrap flex h-10 pr-5 -mb-5'>
                      <div className='flex h-10'>
                        <img
                          src={user.avatar}
                          alt='profile'
                          className='rounded-full'
                        />
                      </div>
                      <span className='ml-2 font-semibold'>{username}</span>
                    </div>
                    <div className='pl-12'>
                      <span>{thread.text}</span>
                      <ul className='flex gap-3 mt-2'>
                        <li className='flex gap-2'>
                          <LikeButton thread={thread} profileThreads={user.threads} />
                          <LikeCounter thread={thread} />
                        </li>
                        <li>
                          <CommentButton
                            setOpen={setOpen}
                            thread={thread}
                            setCommentThread={setCommentThread}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='flex pl-20'>
                    <span className='whitespace-nowrap text-stone-500 font-medium'>
                      {elapsedTimes[thread._id] || 'Just now'}
                    </span>{' '}
                    <ThreadDropMenu thread={thread} />
                  </div>
                  <CommentModal
                    open={open}
                    setOpen={setOpen}
                    commentThread={commentThread}
                  />
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
export default Threads
