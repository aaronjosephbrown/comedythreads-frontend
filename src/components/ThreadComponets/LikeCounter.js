import { useEffect, useState, useContext } from 'react'
import { refreshContext } from '../../features/context/RefreshContext'

const LikeCounter = ({thread, allThreads}) => {
  const [count, setCount] = useState(thread.likesCount)
  const { refresh , setRefresh } = useContext(refreshContext)

  useEffect(() => {
    setCount(thread.likesCount)
    setRefresh(true)
  }, [thread.likesCount, allThreads, refresh, setRefresh, count, setCount])

  return (
    <p className='text-sm font-light text-center h-5 text-[#ffffff]'>{count}</p>
  )
}
export default LikeCounter