import RefreshContextProvider from './features/context/RefreshContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/External/Login'
import Terms from './pages/External/Terms'
import Me from './pages/Internal/Me'
import Nav from './components/Nav/Nav'
import Feed from './pages/Internal/Feed'
import Profile from './pages/Internal/Profile'
import Register from './pages/External/Register'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from './pages/ProtectRoute'

function App() {
  return (
    <RefreshContextProvider>
      <div className='bg-[#101010] min-h-screen overflow-auto w-screen'>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<ProtectedRoute />}>
              <Route index element={<Feed />} />
              <Route path='me' element={<Me />} />
              <Route path=':username' element={<Profile />} />
            </Route>
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='terms' element={<Terms />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </Router>
      </div>
    </RefreshContextProvider>
  )
}

export default App
