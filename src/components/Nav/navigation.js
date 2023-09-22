import { NavLink } from 'react-router-dom'
import {  HomeIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  HeartIcon,
  UserIcon } from '@heroicons/react/24/outline'

export const navigation = (setOpenNT) => [
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
    mobileComponent: (
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? 'text-white' : 'h-8 text-[#777777]'
        }
      >
        Home
      </NavLink>
    )
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
    mobileComponent: (
      <button
        onClick={() => setOpenNT(true)}
        className='text-[#777777]'
      >
       Post
      </button>
    )
  },
  {
    name: 'Likes',
    current: true,
    component: <HeartIcon className='h-8 text-[#777777]' />,
  },
  {
    name: 'Me',
    current: true,
    component: (
      <NavLink
        to='/me'
        className={({ isActive }) =>
          isActive ? 'text-white' : 'h-8 text-[#777777]'
        }
      >
        <UserIcon className='h-8' />{' '}
      </NavLink>
    ),
    mobileComponent: (
      <NavLink
        to='/me'
        className={({ isActive }) =>
          isActive ? 'text-white' : 'h-8 text-[#777777]'
        }
      >
        My Profile
      </NavLink>
    )
  },
]