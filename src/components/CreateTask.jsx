import React from 'react'
import Button from './Button'
const CreateTask = () => {
  return (
    <>
      <input type='text' className='frame2' placeholder='Нове завдання' />
      <div className='input-group'>
        <select className='form-select' id='inputGroupSelect01'>
          <option selected disabled>
            Пріоритет
          </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='3'>4</option>
          <option value='3'>5</option>
        </select>
      </div>
      <Button className='my_btn createBtn'>Створити</Button>
    </>
  )
}

export default CreateTask
