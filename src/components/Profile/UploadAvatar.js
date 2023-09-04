import { useState } from 'react'
import axios from 'axios'

const UploadAvatar = ({ setOpen }) => {
  const user = localStorage.getItem('user');
  const parsedUser = user ? JSON.parse(user) : null;
  const initialAvatar = parsedUser ? parsedUser.avatar : null;

  const [file, setFile] = useState(null);
  const [profileImage, setProfileImage] = useState(initialAvatar);

  const submit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('avatar', file)

    const token = JSON.parse(localStorage.getItem('user')).token

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    }
    const { data } = await axios.post(
      'http://localhost:5001/api/users/avatar',
      formData,
      config
    )
    const avatar = data.avatarUrl
    if (avatar) {
      setOpen(false)
    }

    localStorage.setItem(
      'user',
      JSON.stringify({ ...JSON.parse(localStorage.getItem('user')), avatar })
    )

    setProfileImage(data.avatarUrl)
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
    setProfileImage(URL.createObjectURL(e.target.files[0]))
  }

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
          <div className='hover:scale-125 flex justify-center'>
            <img
              className='h-14 rounded-full'
              src={
                profileImage
                  ? profileImage
                  : JSON.parse(localStorage.getItem('user')).avatar
              }
              alt='profileImage'
            />
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
