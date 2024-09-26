/*  
    main.jsx
    Mauli Gandhi
    301486344
    2024-09-26

    Creating root node and adding App.jsx
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
