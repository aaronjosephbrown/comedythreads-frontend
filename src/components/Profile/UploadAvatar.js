import { useState } from 'react'
import axios from 'axios'
import ProfileImage from './ProfileImage'

const UploadAvatar = () => {
  const [file, setFile] = useState(null)

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
    console.log(data)
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <div className='flex flex-col items-center p-5'>
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
          <div className='hover:scale-125'>
            <ProfileImage height={24}/>
          </div>
        </label>
        <button onClick={submit} className='font-bold py-2 px-4 rounded-2xl bg-white text-black'>
          Update Image
        </button>
      </form>
    </div>
  )
}
export default UploadAvatar
