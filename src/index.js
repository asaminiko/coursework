import React, { createContext } from 'react' // Combined import
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'
import MyUser from './MyUser.js'
import MyTodo from './MyTodo.js'

export const Context = createContext(null) // Exporting the Context

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        myuser: new MyUser(),
        mytodos: new MyTodo(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
)
