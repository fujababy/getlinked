import axios from 'axios'

const token = localStorage.getItem('token')

const Axios = axios.create({
  // baseURL: import.meta.env.VITE_BASEURL,
  baseURL: 'https://backend.getlinked.ai',
  headers: {
    'Content-Type': 'application/json'
  }
})

Axios.interceptors.response.use(
  (response) => {
    if (response.status == 200 || response.status == 201) {
      return response
    }
  },
  (error) => {
    const errorData = error?.response?.data
    if (error?.response?.status !== 422) {
      console.log(errorData?.message || 'Oops, something went wrong!')
    } else if (error?.response?.status === 422) {
      console.log(errorData.message)
    }

    return Promise.reject(error)
  }
)

export default Axios
