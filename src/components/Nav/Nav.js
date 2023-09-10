import logo from '../../assets/img/comedy-thread-logo.png'
import ProfileImage from '../Profile/ProfileImage'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  HeartIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import ProfileUpdate from '../../pages/modals/ProfileUpdate'
import NewThread from '../../pages/modals/NewThread'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [openNT, setOpenNT] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user === null) {
      navigate('/login')
    }
  }, [user, navigate])

  const navigation = [
    {
      name: 'Home',
      current: true,
      component: (
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'text-white' : 'h-8 text-[#777777]'
          }
        >
          <HomeIcon className='h-8' />
        </NavLink>
      ),
    },
    {
      name: 'Search',
      current: true,
      component: <MagnifyingGlassIcon className='h-8 text-[#777777]' />,
    },
    {
      name: 'Post',
      current: true,
      component: (
        <button onClick={() => setOpenNT(true)}>
          <PencilSquareIcon className='h-8 text-[#777777]' />
        </button>
      ),
    },
    {
      name: 'Likes',
      current: true,
      component: <HeartIcon className='h-8 text-[#777777]' />,
    },
    {
      name: 'Profile',
      current: true,
      component: (
        <NavLink
          to='/profile'
          className={({ isActive }) =>
            isActive ? 'text-white' : 'h-8 text-[#777777]'
          }
        >
          <UserIcon className='h-8' />{' '}
        </NavLink>
      ),
    },
  ]

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  if (user === null) {
    return <></>
  }

  return (
    <nav className='sticky top-0'>
      <Disclosure as='nav' className='bg-[#101010]'>
        {({ open }) => (
          <>
            <div className='sm:px-6 lg:px-8 max-w-7xl px-2 mx-auto'>
              <div className='relative flex items-center justify-between h-16'>
                <div className='sm:hidden absolute inset-y-0 left-0 flex items-center'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-[#777777] hover:bg-[#101010] hover:text-[#f3f5f7] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#f3f5f7]'>
                    <span className='absolute -inset-0.5' />
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block w-6 h-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block w-6 h-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='sm:items-stretch sm:justify-between flex items-center justify-center flex-1'>
                  <NavLink to='/'>
                    <div className='flex items-center flex-shrink-0'>
                      <img
                        className='w-auto h-12'
                        src={logo}
                        alt='Comedy Threads'
                      />
                    </div>
                  </NavLink>
                  <div className='sm:ml-6 sm:flex sm:items-center hidden'>
                    <div className='flex items-center justify-center gap-16'>
                      {navigation.map((item) => (
                        <div key={item.name}>{item.component}</div>
                      ))}
                    </div>
                  </div>
                  <div className='sm:static sm:inset-auto sm:ml-6 sm:pr-0 absolute inset-y-0 right-0 flex items-center pr-2'>
                    {/* Profile dropdown */}
                    <Menu as='div' className='relative ml-3'>
                      <div>
                        <Menu.Button className='focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 relative flex text-sm bg-gray-800 rounded-full'>
                          <span className='absolute -inset-1.5' />
                          <span className='sr-only'>Open user menu</span>
                          <div className='flex w-auto h-8'>
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
                        <Menu.Items className='ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg'>
                          <Menu.Item>
                            {({ active }) => (
                              <Menu.Button
                                onClick={() => setOpen(true)}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </Menu.Button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={onLogout}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Log out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className='sm:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      item.current
                        ? 'bg-[#101010] text-[#f3f5f7]'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <ProfileUpdate open={open} setOpen={setOpen} />
      <NewThread open={openNT} setOpen={setOpenNT} />
    </nav>
  )
}
export default Nav
