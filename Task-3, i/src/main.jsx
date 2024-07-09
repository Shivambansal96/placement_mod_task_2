import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import StoreContextProvider from './Context API/StoreContext.jsx'
import TrialProvider from './Context API/Trial.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <TrialProvider>
    <App />
  </TrialProvider>



)
