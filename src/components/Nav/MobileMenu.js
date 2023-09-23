import { Disclosure } from '@headlessui/react'
import { navigation } from './navigation'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MobileMenu = ({ setOpenNT, close }) => {
  const navItems = navigation(setOpenNT)

  return (
    <Disclosure.Panel className='sm:hidden'>
      <div className='px-2 pt-2 pb-3 space-y-1'>
        {navItems.map((item) => (
          <div
            key={item.name}
            as='button'
            onClick={() => {
              close()
            }}
            className={classNames(
              item.current
                ? 'bg-[#101010] text-[#f3f5f7]'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-1 text-base font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.mobileComponent}
          </div>
        ))}
      </div>
    </Disclosure.Panel>
  )
}

export default MobileMenu
