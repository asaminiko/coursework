import axios from 'axios'
const $host = axios.create({
  //неавторизовані запити.
  baseURL: process.env.REACT_APP_API_URL,
})

const $authHost = axios.create({
  //авторизовані запити.
  baseURL: process.env.REACT_APP_API_URL,
})

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)
console.log(process.env.REACT_APP_API_URL)
export { $host, $authHost }
