import React from 'react'
import { Toaster } from 'react-hot-toast';

import { AnalyticsWrapper } from './Components/Index';
import { MainRoutes } from "./Routes/Index"

const App = () => {
  return (
    <>
      <Toaster />
      <AnalyticsWrapper />
      <MainRoutes />
    </>
  )
}

export default App