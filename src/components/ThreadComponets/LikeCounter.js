import { useEffect, useState } from 'react'

const LikeCounter = ({thread}) => {
  const [count, setCount] = useState(thread.likesCount)

  useEffect(() => {
    setCount(thread.likesCount)
  }, [thread.likesCount])

  return (
    <p className='text-sm font-light text-center h-5 text-[#ffffff]'>{count}</p>
  )
}
export default LikeCounter