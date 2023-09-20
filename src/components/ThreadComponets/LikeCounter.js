import { useEffect, useState, useContext } from 'react'
import { refreshContext } from '../../features/context/RefreshContext'

const LikeCounter = ({thread}) => {
  const [count, setCount] = useState(thread.likesCount)
  const { refresh } = useContext(refreshContext)

  useEffect(() => {
    setCount(thread.likesCount)
  }, [thread.likesCount, refresh])

  return (
    <p className='text-sm font-light text-center h-5 text-[#ffffff]'>{count}</p>
  )
}
export default LikeCounter