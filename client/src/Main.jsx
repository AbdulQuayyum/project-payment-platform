import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { Background } from "./Theme/Index"
import { ThemeProvider } from './Contexts/ThemeContext'
import { DashboardProvider } from './Contexts/DashboardContext';
import App from './App.jsx'
import "./Styles/Index.css"
import "./Styles/Style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DashboardProvider>
        <Background>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Background>
      </DashboardProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
