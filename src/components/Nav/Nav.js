import logo from '../../assets/img/comedy-thread-logo.png'
import ProfileImage from '../Profile/ProfileImage'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  if (user === null || user === undefined) {
    return <></>
  }

  return (
    <nav className='flex bg-[#101010] h-15 items-center justify-between text-white px-5'>
      <div>
        <img
          src={logo}
          alt='Comedy Thread Logo'
          className='object-cover h-14'
        />
      </div>
      <div>
        <ul className='flex items-center space-x-4'>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
          <ProfileImage height={14} />
        </ul>
      </div>
    </nav>
  )
}

export default Nav
