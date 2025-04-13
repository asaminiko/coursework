import React from 'react'
import Card from '../components/Card'
import CreateTask from '../components/CreateTask'
const Home = () => {
  return (
    <>
      <div className='frame1'>
        <div className='frame3'>
          <p className='logo'>ToDo</p>
          <CreateTask />
          <div className='dropdown'>
            <button
              className='my_btn sortBtn'
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Сортувати
            </button>
            <ul className='dropdown-menu'>
              <li>
                <a className='dropdown-item' href='/'>
                  за пріоритетом
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='/'>
                  за датою
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='cards'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  )
}

export default Home
