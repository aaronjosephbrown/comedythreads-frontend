import { navigation } from './navigation'

const DesktopNav = ({setOpenNT}) => {

  const navItems = navigation(setOpenNT)
  return (
    <div className='sm:ml-6 sm:flex sm:items-center hidden'>
      <div className='flex items-center justify-center gap-16'>
        {navItems.map((item) => (
          <div key={item.name}>{item.component}</div>
        ))}
      </div>
    </div>
  )
}
export default DesktopNav
