import React from 'react'

const Card = () => {
  return (
    <div className='card m-3'>
      <div className='card-header'>
        <span>Дата: </span>
        <span>Пріоритет:</span>
      </div>
      <div className='card-body'>
        <blockquote className='blockquote mb-0'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='checkDefault'
            />
            <label className='form-check-label task' for='checkDefault'>
              Default checkbox
            </label>
          </div>
        </blockquote>
        <img className='icon' src='/delete.svg' alt='delete' />
        <img className='icon' src='/remake.svg' alt='remake' />
      </div>
    </div>
  )
}

export default Card
