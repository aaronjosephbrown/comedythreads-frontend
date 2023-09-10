import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/External/Login'
import Terms from './pages/External/Terms'
import Threads from './pages/Internal/Threads'
import Nav from './components/Nav/Nav'
import Feed from './pages/Internal/Feed'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='bg-[#101010] min-h-screen overflow-auto'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/profile' element={<Threads />} />
          <Route path='/login' element={<Login />} />
          <Route path='/terms' element={<Terms />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  )
}

export default App
