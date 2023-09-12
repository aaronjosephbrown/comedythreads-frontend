import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import RegisterForm from '../../components/RegisterComponents/RegisterForm'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      <h1 className='text-center text-[#ffffff] text-2xl mb-3'>
        Register for an Account
      </h1>
      <RegisterForm />
      <span className='flex justify-center items-center text-[#777777] pt-2'>
        Already have an account? &nbsp;
        <Link to='/login' className='font-bold hover:text-[#f3f5f7]'>
          {' '}
          Log in here
        </Link>
      </span>
    </div>
  )
}
export default Register
