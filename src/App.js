import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
      <Router>
        <div className='h-screen'>
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
