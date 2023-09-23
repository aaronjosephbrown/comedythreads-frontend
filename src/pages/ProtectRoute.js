import { Outlet, Navigate } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('user') !== null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      {isAuthenticated ? (
        <div className='relative'>
          <div className='fixed top-0 opacity-95 w-screen'>
            <Nav />
          </div>
          <div className='mt-24'>
            <Outlet />
            <Footer />
          </div>
        </div>
      ) : (
        <Navigate to='/login' replace />
      )}
    </div>
  )
}

export default ProtectedRoute
