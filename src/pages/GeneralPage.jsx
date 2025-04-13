import React from 'react'
import Btn from '../components/Btn'
const GeneralPage = () => {
  return (
    <div>
      <div className='frame3'>
        <p className='formLogo'>ToDo</p>
      </div>
      <div className='block'>
        <div className='myBtnBlock'>
          <Btn className='btn m-3 btn-primary'>Зареєструватися</Btn>
          <Btn className='btn m-3 btn-primary '>Увійти</Btn>
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
