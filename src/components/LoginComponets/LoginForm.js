import { useState } from 'react'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      username: '',
      password: '',
    })
  }

  return (
    <form className='space-y-2' method='POST' onSubmit={handleSubmit}>
      <div>
        <div className='mt-2'>
          <input
            id='username'
            name='username'
            type='text'
            value={formData.username}
            autoComplete='username'
            placeholder='Username or email'
            className='block w-full rounded-xl border-0 py-1.5 h-14 px-4 text-white shadow-sm ring-1 ring-inset ring-black placeholder:text-[#777777] bg-[#1e1e1e] focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6'
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <div className='mt-2'>
          <input
            id='password'
            name='password'
            type='password'
            value={formData.password}
            autoComplete='current-password'
            placeholder='Password'
            className='block w-full rounded-xl border-0 py-1.5 h-14 px-4 text-white shadow-sm ring-1 ring-inset ring-black placeholder:text-[#777777] bg-[#1e1e1e] focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6'
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <button
          type='submit'
          className='flex w-full justify-center items-center rounded-xl bg-[#ffffff] py-1.5 h-14 text-sm font-semibold leading-6 text-[#9f9f9f] shadow-sm'
        >
          Log in
        </button>
      </div>
    </form>
  )
}
export default LoginForm
