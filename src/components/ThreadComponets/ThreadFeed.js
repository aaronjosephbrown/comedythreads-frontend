import { useState, useEffect } from 'react'
import { timeSince } from '../../utils/timeSince'
import { UserIcon } from '@heroicons/react/24/outline'
import LikeButton from './Buttons/LikeButton'
import LikeCounter from './LikeCounter'
import CommentButton from './Buttons/CommentButton'
import CommentModal from './Modals/CommentModal'
import { useDispatch, useSelector } from 'react-redux'
import { getThreadsByAllUsers } from '../../features/threads/threadSlice'
import { refreshContext } from '../../features/context/RefreshContext'
import { useContext } from 'react'

const ThreadFeed = () => {
  const [open, setOpen] = useState(false)
  const { refresh } = useContext(refreshContext)
  const { allThreads } = useSelector((state) => state.threads)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getThreadsByAllUsers())
  }, [dispatch, refresh])

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
                  {thread.avatar === '' ? (
                    <UserIcon />
                  ) : (
                    <img
                      src={thread.avatar}
                      alt='profile'
                      className='w-10 h-10 rounded-full'
                    />
                  )}
                  <span className='ml-2 font-semibold'>{thread.username}</span>
                </div>
                <div className='pl-12'>
                  <span>{thread.text}</span>
                  <ul className='flex gap-3 mt-2'>
                    <li className='flex gap-2'>
                      <LikeButton thread={thread} />
                      <LikeCounter thread={thread} />
                    </li>
                    <li>
                      <CommentButton setOpen={setOpen} thread={thread} />
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex pl-20'>
                <span className='whitespace-nowrap text-stone-500 font-medium'>
                  {timeSince(thread.createdAt)}
                </span>{' '}
              </div>
              <CommentModal open={open} setOpen={setOpen} thread={thread} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default ThreadFeed
