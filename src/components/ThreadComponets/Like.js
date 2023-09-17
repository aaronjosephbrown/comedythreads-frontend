import { useState, useEffect } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { likeThread } from '../../features/threads/threadSlice'

const Like = ({ threadId }) => {
  const location = useLocation()
  const [liked, setLiked] = useState(false)
  const { user } = useSelector((state) => state.auth)
  const { allThreads, threads } = useSelector((state) => state.threads)

  const parsedUser = JSON.parse(localStorage.getItem('user'))

  const dispatch = useDispatch()

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        console.log(threadId)
        const allThread = allThreads.find((thread) => thread._id === threadId)
        setLiked(
          allThread?.likedBy?.includes(user.id || parsedUser.id) || false
        )
        break
      case '/profile':
        console.log(threadId)
        const profileThread = threads.find((thread) => thread._id === threadId)
        setLiked(
          profileThread?.likedBy?.includes(user.id || parsedUser.id) || false
        )
        break
      default:
        break
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, parsedUser.id, threadId, user.id])

  const handleLike = async () => {
    dispatch(likeThread(threadId))
  }

  return (
    <div>
      <button onClick={handleLike}>
        {liked ? (
          <SolidHeartIcon className='w-5 h-5 mt-3 text-red-500' />
        ) : (
          <HeartIcon className='w-5 h-5 mt-3' />
        )}
      </button>
    </div>
  )
}
export default Like
