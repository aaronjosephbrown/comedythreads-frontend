import logo from '../../assets/img/comedy-thread-logo.png'
import LoginForm from '../../components/LoginComponets/LoginForm'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { login, reset } from '../../features/auth/authSlice'
import Loading from '../../components/Loading/Loading'

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
    if (localStorage.getItem('user') !== null) {
      navigate('/')
    }
  }, [user, navigate])

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
    return <Loading />
  } else {
    return (
      <div className='h-screen flex flex-col justify-between bg-[#101010]'>
        <div className='h-5/6 flex items-center justify-center'>
          <div className='lg:px-8 flex flex-col justify-center flex-1 min-h-full px-6 py-12'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
              <img
                className='w-auto h-20 mx-auto'
                src={logo}
                alt='Comedy Threads'
              />
              <h2 className='mt-10 text-center text-md font-bold leading-9 tracking-tight text-[#f3f5f7]'>
                Log into your account
              </h2>
            </div>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
              <LoginForm dispatch={dispatch} login={login} />
              <span className='flex justify-center items-center text-[#777777] pt-2'>
                Don't have an account? &nbsp;
                <Link
                  to='/register'
                  className='font-bold hover:text-[#f3f5f7]'
                >
                  {' '}
                  Register here.
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Login
