import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState, useContext } from 'react'
import { EllipsisHorizontalIcon, TrashIcon } from '@heroicons/react/20/solid'
import { useDispatch } from 'react-redux'
import { deleteThread } from '../../features/threads/threadSlice'
import DeleteDialog from './DeleteDialog'
import { refreshContext } from '../../features/context/RefreshContext'

const ThreadDropMenu = ({ thread }) => {
  const { setRefresh } = useContext(refreshContext)
  let [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteThread(thread._id)).then(() => {
      setIsOpen(false)
      setRefresh(true)
    })
  }

  return (
    <div className='text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button>
            <EllipsisHorizontalIcon className='w-5 h-5 ml-2' />
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
          <Menu.Items className='ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 w-56 mt-2 origin-top-right bg-[#777777] divide-y divide-stone-200 rounded-md shadow-lg'>
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-[#ffffff] text-black' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => setIsOpen(true)}
                  >
                    {active ? (
                      <TrashIcon
                        className='w-5 h-5 mr-2 text-red-400'
                        aria-hidden='true'
                      />
                    ) : (
                      <TrashIcon
                        className='w-5 h-5 mr-2 text-red-400'
                        aria-hidden='true'
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <DeleteDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default ThreadDropMenu
