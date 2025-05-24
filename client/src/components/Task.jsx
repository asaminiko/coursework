import React from 'react'
import Form from 'react-bootstrap/Form'
const Task = ({
  placeholder,
  btn,
  onChange,
  value,
  onPriorityChange,
  priority,
  onBlur,
  isInvalid,
  errors,
  onSubmit,
  isSubmitting,
}) => {
  return (
    <>
      <Form.Control
        onSubmit={onSubmit}
        type='text'
        name='task'
        className='frame2 formClick'
        placeholder={errors.task ? errors.task : placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={isInvalid}
      />

      <div className='input-group'>
        {/*можна обрати пріоритет від 1 до 5*/}
        <Form.Select
          aria-label='Default select example'
          className='dropdownStyle'
          onChange={onPriorityChange}
          value={priority}
        >
          <option value='1'>Пріоритет: 1</option>
          <option value='2'>Пріоритет: 2</option>
          <option value='3'>Пріоритет: 3</option>
          <option value='4'>Пріоритет: 4</option>
          <option value='5'>Пріоритет: 5</option>
        </Form.Select>
      </div>
      <button
        className='my_btn createBtn'
        type='submit'
        disabled={isSubmitting}
        onClick={onSubmit}
      >
        {btn}
      </button>
    </>
  )
}

export default Task
