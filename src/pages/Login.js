import logo from '../assets/img/comedy-thread-logo.png'
import LoginForm from '../components/LoginComponets/LoginForm'
import LoginFooter from '../components/LoginComponets/LoginFooter'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'

const Login = () => {
  const { user, isError, isLoading, isSuccess, errorMessage } = useSelector(
    (state) => state.auth
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Comedy Threads'
  }, [])
  
  useEffect(() => {
    if (isError) {
      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        progress: undefined,
        theme: 'dark',
      })
      dispatch(reset())
    }
    if (isSuccess && user) {
      navigate('/')
      dispatch(reset())
    }
  }, [isError, isSuccess, user, errorMessage, dispatch, navigate])

  if (isLoading) {
    return <h1>Loading...</h1>
  } else {
    return (
      <div className='h-screen flex flex-col justify-between bg-[#101010]'>
        <div className='flex h-5/6 justify-center items-center'>
          <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
              <img
                className='mx-auto h-20 w-auto'
                src={logo}
                alt='Comedy Threads'
              />
              <h2 className='mt-10 text-center text-md font-bold leading-9 tracking-tight text-[#f3f5f7]'>
                Log into your account
              </h2>
            </div>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
              <LoginForm dispatch={dispatch} login={login} />
            </div>
          </div>
        </div>
        <LoginFooter />
      </div>
    )
  }
}
export default Login
