import React from 'react'
import Button from '../components/Button'
const GeneralPage = () => {
  return (
    <div>
      <div className='frame3'>
        <p className='formLogo'>ToDo</p>
      </div>
      <div className='block'>
        <div className='myBtnBlock'>
          <Button className='btn m-3 btn-primary'>Зареєструватися</Button>
          <Button className='btn m-3 btn-primary '>Увійти</Button>
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
