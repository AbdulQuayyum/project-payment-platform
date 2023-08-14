import React from 'react'
import { Toaster } from 'react-hot-toast';
import { MainRoutes } from "./Routes/Index"

const App = () => {
  return (
    <>
      <Toaster />
      <MainRoutes />
    </>
  )
}

export default App