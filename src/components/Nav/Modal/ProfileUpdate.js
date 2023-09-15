import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import UploadAvatar from '../../Profile/UploadAvatar'

const ProfileUpdate = ({ open, setOpen }) => {
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
          <div className='fixed inset-0 transition-opacity bg-black bg-opacity-75' />
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
              <Dialog.Panel className='sm:my-8 sm:w-full sm:max-w-sm sm:p-6 relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-[#181818] outline outline-stone-800 rounded-lg shadow-xl'>
                <div>
                  <div className='flex items-start'>
                    <h1 className='text-[#ffffff]'>Profile photo</h1>
                  </div>
                  <div className='flex items-center justify-center'>
                    <UploadAvatar setOpen={setOpen} />
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

export default ProfileUpdate
