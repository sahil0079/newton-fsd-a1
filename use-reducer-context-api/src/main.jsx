import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StateProvider from './context/StateProvider.js'
import reducer, { initialState } from './reducer/reducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <StateProvider reducer={reducer} initialState={initialState} >
    <App />
  </StateProvider>

  // </React.StrictMode>,
)
