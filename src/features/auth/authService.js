import axios from 'axios'

const API_URL = 'http://localhost:5001/api/users'

const authService = {
  login: async ({ username, password }) => {
    
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      })
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
  },
  logout: () => {
    localStorage.removeItem('user')
  }
}

export default authService
