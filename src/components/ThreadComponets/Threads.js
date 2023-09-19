import { useState, useEffect } from 'react'
import ProfileImage from '../Profile/ProfileImage'
import { timeSince } from '../../utils/timeSince'
import ThreadDropMenu from './ThreadDropMenu'
import LikeButton from './Buttons/LikeButton'
import LikeCounter from './LikeCounter'
import CommentButton from './Buttons/CommentButton'
import CommentModal from './Modals/CommentModal'
import { getThreadsByUser } from '../../features/threads/threadSlice'
import { useDispatch } from 'react-redux'

const Threads = ({ threads, username }) => {
  const [open, setOpen] = useState(false)
  const [commentThread, setCommentThread] = useState({})
  const [elapsedTimes, setElapsedTimes] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getThreadsByUser(username))
  }, [username, dispatch])

  const updateElapsedTimes = () => {
    const newElapsedTimes = {}
    threads.forEach((thread) => {
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
  }, [threads])

  return (
    <div className='h-30 mt-6'>
      <div className='flex flex-col h-32'>
        <ul className='flex flex-col space-y-5'>
          {threads.length > 0 &&
            threads.toReversed().map((thread, i) => (
              <li
                key={thread._id || i}
                className='flex justify-between text-sm font-light border-t border-[#777777] pt-2'
              >
                <>
                  <div className='py-3'>
                    <div className='whitespace-nowrap flex h-10 pr-5 -mb-5'>
                      <div className='flex h-10'>
                        <ProfileImage />
                      </div>
                      <span className='ml-2 font-semibold'>{username}</span>
                    </div>
                    <div className='pl-12'>
                      <span>{thread.text}</span>
                      <ul className='flex gap-3 mt-2'>
                        <li className='flex gap-2'>
                          <LikeButton thread={thread} />
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
                </>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
export default Threads
