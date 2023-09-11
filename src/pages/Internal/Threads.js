import ThreadsHeader from '../../components/ThreadComponets/ThreadsHeader'
import Thread from '../../components/ThreadComponets/Thread'
import { useSelector, useDispatch } from 'react-redux'
import { getThreadsByUser } from '../../features/threads/threadSlice'
import { useEffect } from 'react'


const Threads = () => {
  const { threads } = useSelector((state) => state.threads)

  const username = JSON.parse(localStorage.getItem('user')).username

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getThreadsByUser())
  }, [dispatch, threads])

  return (
    <section className='sm:px-6 lg:px-8 max-w-3xl px-2 mx-auto text-white'>
      <div className='max-w-7xl'>
        <ThreadsHeader username={username} />
      <Thread threads={threads} username={username} />
      </div>
    </section>
  )
}
export default Threads
