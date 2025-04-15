import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Card } from 'react-bootstrap'
import { Context } from '../index'

const Mytext = observer(() => {
  const { mytodos } = useContext(Context)

  return (
    <>
      {mytodos.todo.map((i) => (
        <Card className='mb-3 p-3' key={i.id}>
          <Card.Header>
            <span>Дата: {i.date}</span>
            <span className='ms-3'>Пріоритет: {i.priority}</span>
          </Card.Header>
          <Card.Body>
            <Card.Text>{i.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  )
})

export default Mytext
