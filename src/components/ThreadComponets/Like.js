import { useState, useEffect } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { likeThread } from '../../features/threads/threadSlice'

const Like = ({ threadId }) => {
  const [liked, setLiked] = useState(false)
  const { user } = useSelector((state) => state.auth)
  const { allThreads, threads } = useSelector((state) => state.threads)

  const parsedUser = JSON.parse(localStorage.getItem('user'))

  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    let localThreads

    switch (location.pathname) {
      case '/':
        localThreads = allThreads.find((thread) => thread._id === threadId)
        break
      case '/profile':
        localThreads = threads.find((thread) => thread._id === threadId)
        break
      default:
        break
    }

    setLiked(localThreads?.likedBy?.includes(user.id || parsedUser.id) || false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, parsedUser.id, threadId, user.id])

  const handleLike = async () => {
    if (liked === false) {
      dispatch(likeThread(threadId))
      setLiked(true)
    } else {
      setLiked(false)
    }
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
