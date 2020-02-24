import axios from 'axios'

// get token
const token = localStorage.getItem('token')

const instance = axios.create({
  baseURL: 'http://localhost:3000/v1',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export default instance
