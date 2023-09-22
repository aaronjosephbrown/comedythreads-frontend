import { useState, useEffect } from 'react'
import { timeSince } from '../../utils/timeSince'
import { UserIcon } from '@heroicons/react/24/solid'
import LikeButton from './Buttons/LikeButton'
import LikeCounter from './LikeCounter'
import CommentButton from './Buttons/CommentButton'
import CommentModal from './Modals/CommentModal'
import { useDispatch, useSelector } from 'react-redux'
import { getThreadsByAllUsers } from '../../features/threads/threadSlice'
import { refreshContext } from '../../features/context/RefreshContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const ThreadFeed = () => {
  const [open, setOpen] = useState(false)
  const [commentThread, setCommentThread] = useState({})
  const [elapsedTimes, setElapsedTimes] = useState({})
  const { refresh } = useContext(refreshContext)
  const { allThreads } = useSelector((state) => state.threads)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getThreadsByAllUsers())
  }, [dispatch, refresh])

  const updateElapsedTimes = () => {
    const newElapsedTimes = {}
    allThreads.forEach((thread) => {
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
  }, [allThreads])

  return (
    <div className='h-30 mt-6'>
      <div className='flex flex-col h-32'>
        <ul className='flex flex-col space-y-5'>
          {allThreads.toReversed().map((thread) => (
            <li
              key={thread._id}
              className='flex justify-between text-sm font-light border-t border-[#777777] pt-2'
            >
              <div className='py-3'>
                <div className='whitespace-nowrap flex h-10 pr-5 -mb-5'>
                  <Link to={thread.username}>
                    {thread.avatar === '' ? (
                      <UserIcon className='h-8 outline rounded-full' />
                    ) : (
                      <img
                        src={thread.avatar}
                        alt='profile'
                        className='w-10 h-10 rounded-full'
                      />
                    )}
                  </Link>
                  <span className='ml-2 font-semibold'>{thread.username}</span>
                </div>
                <div className='pl-12'>
                  <span>{thread.text}</span>
                  <ul className='flex gap-3 mt-2'>
                    <li className='flex gap-2'>
                      <LikeButton thread={thread} />
                      <LikeCounter thread={thread} allThreads={allThreads} />
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
              </div>
            </li>
          ))}
        </ul>
      </div>
      <CommentModal
        open={open}
        setOpen={setOpen}
        commentThread={commentThread}
      />
    </div>
  )
}
export default ThreadFeed
