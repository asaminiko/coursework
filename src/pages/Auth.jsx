import React from 'react'
import Btn from '../components/Btn'
import Form from 'react-bootstrap/Form'
const Auth = () => {
  return (
    <div>
      <div className='frame3'>
        <p className='formLogo'>ToDo</p>
      </div>
      <div className='form'>
        <div className='container'>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='name@example.com' />
            </Form.Group>
          </Form>
        </div>
        <div className='container'>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='password' />
            </Form.Group>
          </Form>
        </div>
        <Btn className='btn btn-primary btnReg'>Увійти</Btn>
      </div>
    </div>
  )
}

export default Auth
