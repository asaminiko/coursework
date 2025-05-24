import * as Yup from 'yup'

const regax = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

const goodEmail = Yup.string()
  .trim()
  .transform((v) => v.toLowerCase()) //переведення в нижній регістр
  .matches(regax.email, 'Некоректний email')
  .required('Введіть email')

const goodPassword = Yup.string()
  .min(8, 'Пароль має бути більше 8')
  .required('Введіть пароль')

const goodTask = Yup.string().required('Поле пусте')

export const authInitialValues = {
  //Початкові значення
  email: '',
  password: '',
}
export const authValidationSchema = Yup.object({
  email: goodEmail,
  password: goodPassword,
})

export const todoInitialValues = {
  //Початковt значення
  task: '',
}
export const todoValidationSchema = Yup.object({
  task: goodTask,
})
