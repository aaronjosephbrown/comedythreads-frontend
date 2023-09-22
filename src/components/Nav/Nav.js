import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import ProfileUpdate from './Modal/ProfileUpdate'
import NewThreadModal from '../ThreadComponets/Modals/NewThreadModal'
import MobileMenu from './MobelMenu'
import DisclosureButton from './DisclosureButton'
import NavLogo from './NavLogo'
import DesktopNav from './DesktopNav'
import ProfileMenu from './ProfileMenu'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [openNT, setOpenNT] = useState(false)
  const { user } = useSelector((state) => state.auth)

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
                <DisclosureButton open={open} />
                <div className='sm:items-stretch sm:justify-between flex items-center justify-center flex-1'>
                  <NavLogo />
                  <DesktopNav setOpenNT={setOpenNT} />
                  <div className='sm:static sm:inset-auto sm:ml-6 sm:pr-0 absolute inset-y-0 right-0 flex items-center pr-2'>
                    {/* Profile dropdown */}
                    <ProfileMenu setOpen={setOpen} />
                  </div>
                </div>
              </div>
            </div>
            <MobileMenu setOpenNT={setOpenNT} />
          </>
        )}
      </Disclosure>
      <ProfileUpdate open={open} setOpen={setOpen} />
      <NewThreadModal open={openNT} setOpen={setOpenNT} />
    </nav>
  )
}

export default Nav
