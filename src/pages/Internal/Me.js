import MyHeader from '../../components/Me/MyHeader'
import MyThreads from '../../components/Me/MyThreads'
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
  }, [dispatch, refresh, localUser])

  return (
    <section className='sm:px-6 lg:px-8 max-w-3xl px-2 mx-auto text-white min-h-screen'>
      <div className='max-w-7xl'>
        <MyHeader username={localUser.username} />
        <MyThreads threads={threads} username={localUser?.username} />
      </div>
    </section>
  )
}
export default Me
