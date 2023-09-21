import ThreadFeed from '../../components/ThreadComponets/ThreadFeed'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading/Loading'

const Feed = () => {
  const { isLoading } = useSelector((state) => state.threads)


  return (
    <div className='sm:px-6 lg:px-8 max-w-3xl px-2 mx-auto text-white'>
      {  <ThreadFeed /> }
    </div>
  )
}
export default Feed
