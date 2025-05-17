import { $authHost } from './index'

export const createTodo = async (todo) => {
  //для авторизованих користувачів:
  const { data } = await $authHost.post('/api/todo/create', todo)
  return data
}
export const getTodos = async () => {
  const { data } = await $authHost.get('/api/todo/getAll')
  return Array.isArray(data.rows) ? data.rows : data
}

export const getOneTodo = async (id) => {
  const { data } = await $authHost.get('/api/todo/' + id)
  return data
}
export const updateTodo = async (id, text, priority) => {
  const { data } = await $authHost.put('/api/todo/update/' + id, {
    text,
    priority,
  })
  return data
}

export const deleteOneTodo = async (id) => {
  const { data } = await $authHost.delete('/api/todo/delete/' + id)
  return data
}
