import ProfileImage from '../../components/Profile/ProfileImage'
import { useSelector, useDispatch } from 'react-redux'
import { getThreadsByUser } from '../../features/threads/threadSlice'
import { useEffect } from 'react'

const Threads = () => {
  const { loading } = useSelector((state) => state.auth)
  const { threads } = useSelector((state) => state.threads)

  const username = JSON.parse(localStorage.getItem('user')).username

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getThreadsByUser())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='sm:px-6 lg:px-8 max-w-3xl px-2 mx-auto text-black'>
      <div className='bg-[#f3f5f7] h-screen max-w-7xl'>
        <div className='h-30 grid grid-cols-3 mt-6'>
          <div className='flex h-32'>
            <ProfileImage />
          </div>
          <div>
            <h1 className='text-md font-semibold text-black'>{username}</h1>
          </div>
        </div>
        <div className='h-30 mt-6'>
          <div className='flex flex-col h-32'>
            <ul className='flex flex-col space-y-5'>
              {threads &&
                threads.toReversed().map((thread) => (
                  <li
                    key={thread._id}
                    className='text-md font-semibold border-t'
                  >
                    {thread.text}
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
