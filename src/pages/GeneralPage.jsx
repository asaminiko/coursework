import React from 'react'
import Nav from 'react-bootstrap/Nav'
const GeneralPage = () => {
  return (
    <div>
      <div className='frame3'>
        <p className='formLogo'>ToDo</p>
      </div>
      <div className='block'>
        <div className='myBtnBlock'>
          <Nav.Link href='/register'>
            <button className='my_btn btnForm '>Зареєструватися</button>
          </Nav.Link>
          <Nav.Link href='/auth'>
            <button className='my_btn btnForm '>Увійти</button>
          </Nav.Link>
        </div>
        <div className='ml-5'>
          <h3>Плануй свій день</h3>
          <h1>Разом з ToDo</h1>
        </div>
      </div>
    </div>
  )
}

export default GeneralPage
