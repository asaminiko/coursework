import React from 'react'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'

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
              <Form.Control
                type='email'
                placeholder='name@example.com'
                className='formClick'
              />
            </Form.Group>
          </Form>
        </div>
        <div className='container'>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='password'
                className='formClick'
              />
            </Form.Group>
          </Form>
        </div>
        <div className='btnFormBlock'>
          <Nav.Link href='/'>
            <button className='my_btn btnForm '>Увійти</button>
          </Nav.Link>
          <Nav.Link href='/general'>
            <button className='my_btn btnForm '>На головну</button>
          </Nav.Link>
        </div>
      </div>
    </div>
  )
}

export default Auth
