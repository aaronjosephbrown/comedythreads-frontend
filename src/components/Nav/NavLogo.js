import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/comedy-thread-logo.png'

const NavLogo = () => {
  return (
    <NavLink to='/'>
    <div className='flex items-center flex-shrink-0'>
      <img
        className='w-auto h-12'
        src={logo}
        alt='Comedy Threads'
      />
    </div>
  </NavLink>
  )
}
export default NavLogo