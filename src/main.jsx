// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import WindowControls from './context/WindowControls.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <WindowControls>
      <App />
    </WindowControls>
  // </React.StrictMode>,
)
