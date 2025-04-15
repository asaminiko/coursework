import React from 'react'
import CreateTask from '../components/CreateTask'
import Dropdown from 'react-bootstrap/Dropdown'
import Mytext from '../components/Mytext'
import Nav from 'react-bootstrap/Nav'
const Home = () => {
  return (
    <>
      <div className='frame1'>
        <div className='frame3'>
          <Nav.Link href='/general'>
            <button className='my_btn exit'>Вийти</button>
          </Nav.Link>
          <p className='logo'>ToDo</p>
          <CreateTask />
          <Dropdown>
            <Dropdown.Toggle id='dropdown-basic' className='my_btn sortBtn'>
              Сортувати
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>за пріоритетом</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>за датою</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className='cards'>
        <Mytext />
      </div>
    </>
  )
}

export default Home
