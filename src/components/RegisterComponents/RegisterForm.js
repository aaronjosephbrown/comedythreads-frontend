import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../features/auth/authSlice'
import { toast } from 'react-toastify'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    DOB: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const dispatch = useDispatch()

  const isFormValid =
    formData.username &&
    formData.password &&
    formData.confirmPassword &&
    formData.email &&
    formData.firstname &&
    formData.lastname &&
    formData.DOB

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      // Create a Date object from the form data
      const date = new Date(formData.DOB)

      // Format date to MM-DD-YYYY
      const formattedDOB =
        (date.getMonth() + 1).toString().padStart(2, '0') +
        '-' +
        date.getDate().toString().padStart(2, '0') +
        '-' +
        date.getFullYear()

      const formattedFormData = {
        ...formData,
        DOB: formattedDOB,
      }

      console.log(formattedFormData)
      dispatch(register(formattedFormData))
    }
  }

  return (
    <form className='flex items-center justify-center' onSubmit={onSubmit}>
      <div className='form-group w-96 flex flex-col space-y-2'>
        <input
          type='text'
          className='block w-full rounded-xl border-0 py-1.5 h-14 px-4 text-white shadow ring-1 ring-inset ring-black placeholder:text-[#777777] bg-[#1e1e1e] focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6'
          name='username'
          placeholder='Username'
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type='text'
          className='block w-full rounded-xl border-0 py-1.5 h-14 px-4 text-white shadow ring-1 ring-inset ring-black placeholder:text-[#777777] bg-[#1e1e1e] focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6'
          name='firstname'
          placeholder='Firstname'
          value={formData.firstname}
          onChange={handleChange}
        />
        <input
          type='text'
          className='block w-full rounded-xl border-0 py-1.5 h-14 px-4 text-white shadow ring-1 ring-inset ring-black placeholder:text-[#777777] bg-[#1e1e1e] focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6'
          name='lastname'
          placeholder='Lastname'
          value={formData.lastname}
          onChange={handleChange}
        />
        <input
          type='date'
          className='block w-full rounded-xl border-0 py-1.5 h-14 px-4 text-white shadow ring-1 ring-inset ring-black placeholder:text-[#777777] bg-[#1e1e1e] focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6'
          name='DOB'
          placeholder='Date of Birth'
          value={formData.DOB}
          onChange={handleChange}
        />
        <input
          type='email'
          className='block w-full rounded-xl border-0 py-1.5 h-14 px-4 text-white shadow ring-1 ring-inset ring-black placeholder:text-[#777777] bg-[#1e1e1e] focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='password'
          className='block w-full rounded-xl border-0 py-1.5 h-14 px-4 text-white shadow ring-1 ring-inset ring-black placeholder:text-[#777777] bg-[#1e1e1e] focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type='password'
          className='block w-full rounded-xl border-0 py-1.5 h-14 px-4 text-white shadow ring-1 ring-inset ring-black placeholder:text-[#777777] bg-[#1e1e1e] focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button
          type='submit'
          className={`flex w-full justify-center items-center rounded-xl bg-[#ffffff] py-1.5 h-14 text-sm font-semibold leading-6 text-[#9f9f9f] shadow-sm ${
            isFormValid
              ? 'bg-[#ffffff] text-[#9f9f9f]'
              : 'bg-[#888888] text-[#666666]'
          }`}
          disabled={!isFormValid}
        >
          {' '}
          Register{' '}
        </button>
      </div>
    </form>
  )
}
export default RegisterForm
