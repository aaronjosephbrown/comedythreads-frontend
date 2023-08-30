import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App
