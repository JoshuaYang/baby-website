import axios from 'axios'
import $toast from '@/plugins/toast'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3002'
    : 'http://api.orzy.me'

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true
})

axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 403) {
      window.location.href = '/'
    } else {
      $toast.show(error.response.data.message)
    }

    return Promise.reject(error)
  }
)

export default async (url, options = { method: 'GET' }) => {
  const methodGet = !['POST', 'PUT', 'PATCH', 'DELETE'].includes(options.method)

  return axiosInstance({
    url,
    method: options.method,

    // GET
    params: methodGet ? options.body : null,

    // POST, PUT, PATCH
    data: !methodGet ? options.body : null
  })
}
