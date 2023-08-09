import React from 'react'
import { Routes, Route } from "react-router-dom";

import { Login, Register } from '../Views/Index';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Register' element={<Register />} />
        </Routes>
    )
}

export default MainRoutes