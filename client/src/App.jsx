import React from 'react'
import { Toaster } from 'react-hot-toast';
import MainRoutes from './Routes/Main.Routes';

const App = () => {
  return (
    <>
      <Toaster />
      <MainRoutes />
    </>
  )
}

export default App