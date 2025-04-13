import React from 'react'
import Button from '../components/Button'
const Auth = () => {
  return (
    <div>
      <div className='frame3'>
        <p className='formLogo'>ToDo</p>
      </div>
      <div className='form'>
        <div className='container'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
          />
        </div>
        <div className='container'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
          />
        </div>
        <Button className='btn btn-primary btnReg'>Увійти</Button>
      </div>
    </div>
  )
}

export default Auth
