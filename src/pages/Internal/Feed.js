import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getThreadsByAllUsers } from '../../features/threads/threadSlice'
import ThreadFeed from '../../components/ThreadComponets/ThreadFeed'

const Feed = () => {
  const dispatch = useDispatch()
  const { allThreads } = useSelector((state) => state.threads)

  useEffect(() => {
    dispatch(getThreadsByAllUsers())
  }, [dispatch, allThreads])

  return (
    <div className='sm:px-6 lg:px-8 max-w-3xl px-2 mx-auto text-white'>
      <ThreadFeed threads={allThreads}/>
    </div>
  )
}
export default Feed