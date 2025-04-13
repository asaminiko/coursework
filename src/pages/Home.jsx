import React from 'react'
import CreateTask from '../components/CreateTask'
import { Card } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
const Home = () => {
  return (
    <>
      <div className='frame1'>
        <div className='frame3'>
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
        <Card className='mb-3 p-3'>
          <Card.Header>
            <span> Дата: </span>
            <span> Пріоритет: </span>
          </Card.Header>
          <Card.Body>
            <Card.Text>sdassasdasasdasd</Card.Text>
          </Card.Body>
        </Card>
        <Card className='mb-3 p-3'>
          <Card.Header>
            <span> Дата: </span>
            <span> Пріоритет: </span>
          </Card.Header>
          <Card.Body>
            <Card.Text>sdassasdasasdasd</Card.Text>
          </Card.Body>
        </Card>
        <Card className='mb-3 p-3'>
          <Card.Header>
            <span> Дата: </span>
            <span> Пріоритет: </span>
          </Card.Header>
          <Card.Body>
            <Card.Text>sdassasdasasdasd</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Home
