import axios from 'axios'
// import store from '@/store'
import router from '@/router'
const request = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  timeout: 5000
})
/* 请求拦截 */
// request.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = `Bearer ${}`
//     return config
//   },
//   (error) => Promise.reject(error)
// )
/* 响应拦截 */
request.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response && error.response.status === 401) {
      router.push('/login')
    }
  }
)
export default request
