import { Menu, Transition } from '@headlessui/react'
import ProfileImage from '../Profile/ProfileImage'
import { Fragment } from 'react'
import { logout, reset } from '../../features/auth/authSlice'
import { clearThreads } from '../../features/threads/threadSlice'
import { useNavigate } from 'react-router-dom'
import { refreshContext } from '../../features/context/RefreshContext'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'

const ProfileMenu = ({ setOpen }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { clearContext } = useContext(refreshContext)
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    dispatch(clearThreads())
    clearContext()
    navigate('/login')
  }

  return (
    <Menu as='div' className='relative ml-3'>
      <div>
        <Menu.Button className='focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 relative flex text-sm bg-gray-800 rounded-full'>
          <div className='flex w-8 h-8'>
            <ProfileImage />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-[#777777] rounded-md shadow-lg'>
          <Menu.Item>
            {({ active }) => (
              <Menu.Button
                onClick={() => setOpen(true)}
                className={classNames(
                  active ? 'bg-gray-200 rounded-lg text-black' : '',
                  'text-left w-full px-4 py-2 text-sm text-[#ffffff]'
                )}
              >
                Edit Profile
              </Menu.Button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={onLogout}
                className={classNames(
                  active ? 'bg-gray-200 rounded-lg text-black' : '',
                  'text-left w-full px-4 py-2 text-sm text-[#ffffff]'
                )}
              >
                Log out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
export default ProfileMenu
