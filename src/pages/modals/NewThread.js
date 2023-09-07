import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ProfileImage from '../../components/Profile/ProfileImage'

const NewThread = ({ open, setOpen }) => {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='sm:items-center sm:p-0 flex items-end justify-center min-h-full p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='sm:my-8 sm:w-full sm:max-w-sm sm:p-6 relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl'>
                <div>
                  <div className='flex items-start'>
                    <div className='flex space-x-2'>
                      <ProfileImage h={10} />
                      <h2>{user.username}</h2>
                    </div>
                  </div>
                  <div className='flex items-center justify-center'>
                    
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default NewThread
