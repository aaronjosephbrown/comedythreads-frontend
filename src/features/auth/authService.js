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
  },

  updatedAvatar: async (newAvater) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = user.token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    }
   
      const { data } = await axios.post(`${API_URL}/avatar`, newAvater, config)
      if (data) {
        const avatar = data.avatar
        localStorage.setItem('user', JSON.stringify({ ...user, avatar }))
      }
  }
}

export default authService
