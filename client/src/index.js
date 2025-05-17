import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'
import MyUser from './MyUser.js'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        myuser: new MyUser(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
)
