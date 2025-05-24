import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Card } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { Form } from 'react-bootstrap'
import {
  binaryInsertionSortByPriority,
  binaryInsertionSortByDate,
} from '../Sort.js'

const TodoCard = observer(({ todos, sortType }) => {
  const [activeCheckbox, setActiveCheckbox] = useState({})
  const sortedTodosByPriority = binaryInsertionSortByPriority([...todos])
  const sortedTodosByDate = binaryInsertionSortByDate([...todos])
  useEffect(() => {
    const saved = localStorage.getItem('activeCheckbox')
    if (saved) {
      setActiveCheckbox(JSON.parse(saved))
    }
  }, [])
  const toggleCheckbox = (id) => {
    const updated = { ...activeCheckbox, [id]: !activeCheckbox[id] }
    setActiveCheckbox(updated)
    localStorage.setItem('activeCheckbox', JSON.stringify(updated))
  }
  const renderTodos = (list) =>
    list.map((item) => (
      <Card className='mb-3 p-3' key={item.id}>
        <Card.Header>
          <span className='spanCard'>Дата: {item.date}</span>
          <span className='spanCard ms-3'>Пріоритет: {item.priority}</span>
        </Card.Header>

        <Card.Body>
          {/*галочка'Виконано'*/}
          <Form.Check
            type='checkbox'
            id={item.id}
            checked={!!activeCheckbox[item.id]}
            onChange={() => toggleCheckbox(item.id)}
          />

          <Card.Text>{item.text}</Card.Text>
        </Card.Body>

        <Nav.Link href={`/todo/${item.id}`}>
          <button className='my_btn createBtn'>Редагувати</button>
        </Nav.Link>
      </Card>
    ))

  if (sortType === 'date' && sortedTodosByDate.length > 0) {
    return renderTodos(sortedTodosByDate)
  } else if (sortType === 'priority' && sortedTodosByPriority.length > 0) {
    return renderTodos(sortedTodosByPriority)
  } else if (sortType === 'default' && todos.length > 0) {
    return renderTodos(todos)
  } else {
    return <div className='text-center mt-5'>Немає завдань</div>
  }
})

export default TodoCard
