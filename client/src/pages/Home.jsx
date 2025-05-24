import React, { useState, useEffect, useContext } from 'react'
import Task from '../components/Task'
import Dropdown from 'react-bootstrap/Dropdown'
import TodoCard from '../components/TodoCard'
import Nav from 'react-bootstrap/Nav'
import { getTodos } from '../http/todoAPI'
import { createTodo } from '../http/todoAPI'
import { Context } from '../index'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import {
  todoValidationSchema as validationSchema,
  todoInitialValues as initialValues,
} from '../Form.js'
const Home = () => {
  const { myuser } = useContext(Context)
  const [todos, setTodos] = useState([])
  const [priority, setPriority] = useState('1')
  const [sortType, setSortType] = useState('default')
  const navigate = useNavigate()
  useEffect(() => {
    if (!myuser.isAuth) {
      return navigate('/general')
      //Якщо неавторизований -
      // користувача перекидує на /general
    }
    getTodos()
      .then((data) => {
        setTodos(data)
      })
      .catch((e) => {
        console.error('Помилка', e)
        setTodos([])
      })
  }, [myuser.isAuth, navigate])

  const create = (values, { setSubmitting, resetForm }) => {
    const newTodo = { text: values.task, priority }
    createTodo(newTodo)
      .then((res) => {
        setTodos((prev) => [...prev, res])
        resetForm()
      })
      .catch((e) => {
        console.error('Помилка при створенні ', e)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  const logOut = () => {
    //вийти з акаунту
    myuser.setUser({})
    myuser.setIsAuth(false)
    localStorage.removeItem('isAuth')
    localStorage.removeItem('user')
  }
  return (
    <>
      <div className='frame1'>
        <div className='frame3'>
          <Nav.Link href='/general'>
            <button className='my_btn exit' onClick={() => logOut()}>
              Вийти
            </button>
          </Nav.Link>
          <p className='logo'>ToDo</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={create}
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
                placeholder='Нове завдання'
                btn='Створити'
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
          <Dropdown>
            <Dropdown.Toggle id='dropdown-basic' className='my_btn sortBtn'>
              Сортувати
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSortType('priority')}>
                за пріоритетом
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortType('date')}>
                за датою
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className='cards'>
        <TodoCard todos={todos} sortType={sortType} />
      </div>
    </>
  )
}

export default Home
