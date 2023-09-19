import MyHeader from '../../components/ThreadComponets/MyHeader'
import Threads from '../../components/ThreadComponets/Threads'
import { useSelector, useDispatch } from 'react-redux'
import { getThreadsByUser } from '../../features/threads/threadSlice'
import { useEffect, useContext } from 'react'
import { refreshContext } from '../../features/context/RefreshContext'


const Me = () => {
  const { refresh, localUser } = useContext(refreshContext)
  const { threads } = useSelector((state) => state.threads)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getThreadsByUser())
  }, [dispatch, refresh])

  return (
    <section className='sm:px-6 lg:px-8 max-w-3xl px-2 mx-auto text-white'>
      <div className='max-w-7xl'>
        <MyHeader username={localUser.username} />
      <Threads threads={threads} username={localUser.username} />
      </div>
    </section>
  )
}
export default Me
