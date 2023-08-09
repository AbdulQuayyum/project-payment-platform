import React from 'react'
import ReactDOM from 'react-dom/client'

import { Background } from "./Theme/Index"
import { ThemeProvider } from './Contexts/ThemeContext'
import App from './App.jsx'
import "./Styles/Index.css"
import "./Styles/Style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Background>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Background>
  </React.StrictMode>,
)
