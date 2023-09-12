import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateAvatar } from '../../features/auth/authSlice'
import { UserIcon } from '@heroicons/react/24/solid'

const UploadAvatar = ({ setOpen }) => {
  const [file, setFile] = useState(null)
  const [profileImage, setProfileImage] = useState('')
  const dispatch = useDispatch()

  const avatar = JSON.parse(localStorage.getItem('user')).avatar

  useEffect(() => {
    setProfileImage(avatar)
  }, [setProfileImage, avatar])

  const submit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('avatar', file)
    dispatch(updateAvatar(formData))
    setOpen(false)
    setFile(null)
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
    setProfileImage(URL.createObjectURL(e.target.files[0]))
  }

// ... (other imports and code)
return (
  <div className='flex flex-col items-center justify-center p-5'>
    <form className='flex flex-col'>
      <input
        id='fileInput'
        style={{ display: 'none' }}
        onChange={handleFileChange}
        type='file'
        name='avatar'
        accept='image/*'
      />
      <label htmlFor='fileInput' className='custom-file-label'>
        <div className='hover:scale-125 flex justify-center pb-1'>
          {file === null ? (
            <UserIcon className='h-14 w-14 outline rounded-full' />
          ) : (
            <div className="h-14 w-14 rounded-full overflow-hidden">
              <img
                className='object-cover w-full h-full' 
                src={profileImage ? profileImage : avatar}
                alt='profileImage'
              />
            </div>
          )}
        </div>
      </label>
      <button
        onClick={submit}
        className='rounded-2xl px-4 py-2 font-bold text-black bg-white'
        disabled={!file}
      >
        Update Image
      </button>
    </form>
  </div>
)

}
export default UploadAvatar
