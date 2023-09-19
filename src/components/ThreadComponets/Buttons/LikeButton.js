import { useState, useEffect, useContext } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { likeThread, unLikeThread } from '../../../features/threads/threadSlice'
import { refreshContext } from '../../../features/context/RefreshContext'

const LikeButton = ({ thread }) => {
  const [liked, setLiked] = useState(false)
  const { setRefresh, refresh, localUser } = useContext(refreshContext)
  const { user } = useSelector((state) => state.auth)
  const { allThreads, threads } = useSelector((state) => state.threads)

  const threadId = thread?._id

  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    let localThreads

    switch (location.pathname) {
      case '/':
        localThreads = allThreads.find((thread) => thread?._id === threadId)
        break
      case '/profile':
        localThreads = threads.find((thread) => thread?._id === threadId)
        break
      default:
        break
    }

    setLiked(localThreads?.likedBy?.includes(user?.id || localUser?.id) || false)
  }, [
    allThreads,
    threads,
    location.pathname,
    threadId,
    user?.id,
    localUser?.id,
    refresh,
  ])

  const handleLike = () => {
    if (!liked) {
      dispatch(likeThread(threadId)).then(() => {
        setLiked(true)
      })
    } else {
      dispatch(unLikeThread(threadId)).then(() => {
        setLiked(false)
      })
    }
    setRefresh(true)
  }

  return (
    <div>
      <button onClick={handleLike}>
        {liked ? (
          <SolidHeartIcon className='h-5 text-red-500' />
        ) : (
          <HeartIcon className='h-5' />
        )}
      </button>
    </div>
  )
}
export default LikeButton
