import axios from 'axios'

const API_URL = 'https://comedythreads-backend-e3693173069a.herokuapp.com/api/threads'

const threadService = {
  getThreadsByUser: async () => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  },

  createThread: async (thread) => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const response = await axios.post(`${API_URL}`, thread, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  },

  getThreadsByAllUsers: async () => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const response = await axios.get(`${API_URL}/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  },
  deleteThread: async (threadId) => {
    const token = JSON.parse(localStorage.getItem('user')).token
    const response = await axios.delete(`${API_URL}/${threadId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  },
  likeThread: async (threadId) => {
    const token = JSON.parse(localStorage.getItem('user')).token
      const response = await axios.put(
        `${API_URL}/like/${threadId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      return response.data
  },
  unLikeThread: async (threadId) => {
    const token = JSON.parse(localStorage.getItem('user')).token
      const response = await axios.put(
        `${API_URL}/unlike/${threadId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      return response.data
  }
}

export default threadService
