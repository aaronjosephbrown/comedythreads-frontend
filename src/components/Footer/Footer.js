import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex justify-center text-[#777777] text-[11px] mt-16 w-screen'>
      <ul className='sm:flex-row flex flex-col items-center gap-2 pb-6 space-x-4'>
        <li>© 2023</li>
        <li>
          <NavLink to='/terms'>Comedy Threads Terms</NavLink>
        </li>
        <li>Privacy Policy</li>
        <li>Cookies</li>
        <li>Report a problem</li>
      </ul>
    </footer>
  )
}
export default Footer
