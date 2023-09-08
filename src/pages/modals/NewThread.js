import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ProfileImage from '../../components/Profile/ProfileImage'
import { useState } from 'react'

const NewThread = ({ open, setOpen }) => {
  const [thread, setThread] = useState('')
  const user = JSON.parse(localStorage.getItem('user'))

  const onInput = (e) => {
    setThread(e.target.innerText)
  }

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
              <div className='w-[600px]'>
                <Dialog.Panel className='h-54 sm:my-8 sm:w-full sm:p-6 relative px-4 pt-5 pb-4 overflow-hidden transition-all transform rounded-2xl shadow-xl bg-[#181818] outline outline-stone-800'>
                  <div>
                    <div className='flex items-start'>
                      <div className='flex space-x-2'>
                        <div className='flex h-10'>
                          <ProfileImage />
                        </div>
                        <div className='flex flex-col items-start'>
                          <h2 className='text-[#ffffff]'>
                            {user.username}
                          </h2>
                          <span
                            role='textbox'
                            onInput={onInput}
                            className='customSpan border-none resize-none outline-none focus:ring-transparent bg-[#181818] text-[#ffffff] text-left'
                            contentEditable='true'
                          >
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center justify-center'></div>
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default NewThread
