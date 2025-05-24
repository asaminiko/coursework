import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import Task from '../components/Task'
import { Nav } from 'react-bootstrap'
import { Context } from '../index'
import { Formik } from 'formik'
import { todoValidationSchema as validationSchema } from '../Form.js'
import { getOneTodo, updateTodo, deleteOneTodo } from '../http/todoAPI'

const Info = observer(() => {
  const { id } = useParams()
  const { myuser } = useContext(Context)
  const [oneTodo, setOneTodo] = useState(null)
  const [priority, setPriority] = useState('1')
  const navigate = useNavigate()

  useEffect(() => {
    if (!myuser.isAuth) {
      //Якщо неавторизований - користувача перекидує на /general.
      navigate('/general')
      return
    }
    getOneTodo(id)
      .then((data) => {
        setOneTodo(data)
        setPriority(String(data.priority))
      })
      .catch((e) => {
        console.error('Помилка ', e)
        setOneTodo(null)
      })
  }, [myuser.isAuth, navigate, id])

  const update = (values, { setSubmitting }) => {
    updateTodo(id, values.task, priority)
      .then(() => {
        setOneTodo((prev) => ({
          ...prev,
          text: values.task,
          priority,
        }))
      })
      .catch((e) => console.error('Помилка ', e))
      .finally(() => {
        setSubmitting(false)
      })
  }

  const deleteTodo = () => {
    deleteOneTodo(id)
      .then(() => setOneTodo(null))
      .catch((e) => {
        console.error('Помилка ', e)
        setOneTodo(null)
      })
  }

  return (
    <>
      <div className='frame3'>
        <p className='logo'>ToDo</p>
        <Formik
          enableReinitialize
          initialValues={{ task: oneTodo?.text || '' }}
          validationSchema={validationSchema}
          onSubmit={update}
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
            <Task
              placeholder='Змінити завдання'
              btn='Змінити'
              onPriorityChange={(e) => setPriority(e.target.value)}
              onSubmit={handleSubmit}
              value={values.task}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.task && !!errors.task}
              isSubmitting={isSubmitting}
              errors={errors}
              priority={priority}
            />
          )}
        </Formik>

        <Nav.Link href='/'>
          {/*перекидує на головну сторінку авторизованого користувача */}
          <button className='my_btn deleteBtn' onClick={deleteTodo}>
            Видалити
          </button>
        </Nav.Link>
      </div>

      <div className='infoContainer'>
        {oneTodo ? (
          <div>
            <span className='infoSpan'>Пріоритет: {oneTodo.priority}</span>
            <span className='infoSpan'>Дата: {oneTodo.date}</span>
            <p className='textInfo'>{oneTodo.text}</p>
          </div>
        ) : (
          <p>Todo не знайдено.</p>
        )}
      </div>

      <Nav.Link href='/'>
        <button className='my_btn btnForm'>Назад</button>
      </Nav.Link>
    </>
  )
})

export default Info
