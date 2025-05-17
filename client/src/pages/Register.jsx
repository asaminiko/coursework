import React, { useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Context } from '../index'
import GeneralLine from '../components/GeneralLine'
import { registration } from '../http/userAPI'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import {
  authValidationSchema as validationSchema,
  authInitialValues as initialValues,
} from '../Form.js'
const Register = () => {
  const navigate = useNavigate()
  const { myuser } = useContext(Context)
  useEffect(() => {
    if (myuser.isAuth) {
      //Якщо користувач авторизований - перенаправляє на головну сторінку
      navigate('/')
    }
  }, [myuser.isAuth, navigate])
  const onFormSubmit = async (values, { setSubmitting }) => {
    console.log('Submitting values:', values)
    try {
      const data = await registration(values.email, values.password)
      myuser.setUser(data)
      myuser.setIsAuth(true)
      localStorage.setItem('isAuth', 'true')
      navigate('/')
    } catch (e) {
      alert(e.response?.data?.message || 'Помилка')
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <div>
      <GeneralLine />
      <div className='form'>
        <div className='container'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onFormSubmit}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              errors,
              touched,
              handleBlur,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='emailInput'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    placeholder='name@example.com'
                    className='formClick'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && !!errors.email}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='passwordInput'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    name='password'
                    placeholder='password'
                    className='formClick'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.password && !!errors.password}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className='btnFormBlock'>
                  <button
                    className='my_btn btnForm'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    Зареєструватись
                  </button>
                  <button
                    className='my_btn btnForm'
                    type='button'
                    onClick={() => navigate('/general')}
                  >
                    На головну
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Register
