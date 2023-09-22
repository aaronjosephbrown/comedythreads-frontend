import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'

const DisclosureButton = ({open}) => {
  return (
    <div className='sm:hidden absolute inset-y-0 left-0 flex items-center'>
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
  )
}
export default DisclosureButton
