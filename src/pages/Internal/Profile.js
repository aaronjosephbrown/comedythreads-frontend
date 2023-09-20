import { useParams } from 'react-router-dom'

const Threads = () => {
  let { username } = useParams()
 
  return (
  <p className='flex justify-center items-center text-[#ffffff] h-screen'>Welcome to {username} page!</p>
  )
}
export default Threads
