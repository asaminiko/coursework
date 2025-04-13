import React from 'react'
import Form from 'react-bootstrap/Form'
const CreateTask = () => {
  return (
    <>
      <input type='text' className='frame2' placeholder='Нове завдання' />
      <div className='input-group'>
        <Form.Select aria-label='Default select example'>
          <option>Пріоритет</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </Form.Select>
      </div>
      <button className='my_btn createBtn'>Створити</button>
    </>
  )
}

export default CreateTask
