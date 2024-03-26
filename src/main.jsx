import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {GlobalContextProvider} from './contextos/GlobalContext'
import "./estilos/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
)
