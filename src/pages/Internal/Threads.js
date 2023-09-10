import ProfileImage from '../../components/Profile/ProfileImage'
import { useSelector, useDispatch } from 'react-redux'
import { getThreadsByUser } from '../../features/threads/threadSlice'
import { useEffect } from 'react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

const Threads = () => {
  const { threads } = useSelector((state) => state.threads)

  const username = JSON.parse(localStorage.getItem('user')).username

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getThreadsByUser())
  }, [dispatch, threads])

  const timeSince = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000)
    let interval = seconds / 31536000
    if (interval > 1) return Math.floor(interval) + ' y'
    interval = seconds / 2592000
    if (interval > 1) return Math.floor(interval) + ' mo'
    interval = seconds / 86400
    if (interval > 1) return Math.floor(interval) + ' d'
    interval = seconds / 3600
    if (interval > 1) return Math.floor(interval) + ' h'
    interval = seconds / 60
    if (interval > 1) return Math.floor(interval) + ' m'
    return Math.floor(seconds) + ' s'
  }

  return (
    <div className='sm:px-6 lg:px-8 max-w-3xl px-2 mx-auto text-white'>
      <div className='max-w-7xl'>
        <div className='h-30 grid grid-cols-3 mt-6'>
          <div className='flex h-32'>
            <ProfileImage />
          </div>
          <div>
            <h1 className='text-md font-semibold'>{username}</h1>
          </div>
        </div>
        <div className='h-30 mt-6'>
          <div className='flex flex-col h-32'>
            <ul className='flex flex-col space-y-5'>
              {threads &&
                threads.toReversed().map((thread, i) => (
                  <li
                    key={i}
                    className='flex justify-between text-sm font-light border-t border-[#777777] pt-2'
                  >
                    <div className='py-3'>
                    <div className='flex h-10 pr-5 whitespace-nowrap -mb-5'>
                      <ProfileImage />
                      <span className='ml-2 font-semibold'>{username}</span>
                    </div>
                    <div className='pl-12'>
                      <span>{thread.text}</span>
                    </div>
                    </div>
                    <div className=' flex pl-20'>
                      <span className='whitespace-nowrap font-medium text-stone-500'>{timeSince(thread.createdAt)}</span>{' '}
                      <EllipsisHorizontalIcon className='w-5 h-5 ml-2' />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Threads
