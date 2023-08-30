import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <div className='h-screen'>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  )
}

export default App
