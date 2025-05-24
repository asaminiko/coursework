import { $host } from './index'
import { jwtDecode } from 'jwt-decode'

export const registration = async (email, password) => {
  const { data } = await $host.post('/api/user/register', {
    email,
    password,
  })
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const login = async (email, password) => {
  const { data } = await $host.post('/api/user/login', { email, password })
  localStorage.setItem('token', data.token) //Токен зберігся в  localStorage
  return jwtDecode(data.token)
}
