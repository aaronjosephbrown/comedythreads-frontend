import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/External/Login'
import Terms from './pages/External/Terms'
import Threads from './pages/Internal/Threads'
import Nav from './components/Nav/Nav'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Threads />} />
        <Route path='/login' element={<Login />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App
