import ThreadsHeader from '../../components/ThreadComponets/MyHeader'
import Thread from '../../components/ThreadComponets/Threads'
import { useSelector, useDispatch } from 'react-redux'
import { getThreadsByUser } from '../../features/threads/threadSlice'
import { useEffect, useContext } from 'react'
import { refreshContext } from '../../features/context/RefreshContext'
import { useParams } from 'react-router-dom'

const Threads = () => {
  const { refresh, localUser } = useContext(refreshContext)
  const { threads } = useSelector((state) => state.threads)
  const dispatch = useDispatch()

  let { username } = useParams()

  useEffect(() => {
    console.log(username)
    dispatch(getThreadsByUser())
  }, [dispatch, refresh])

  return (
    <section className='sm:px-6 lg:px-8 max-w-3xl px-2 mx-auto text-white'>
      <div className='max-w-7xl'>
        <ThreadsHeader username={localUser.username} />
        <Thread threads={threads} username={localUser.username} />
      </div>
    </section>
  )
}
export default Threads
