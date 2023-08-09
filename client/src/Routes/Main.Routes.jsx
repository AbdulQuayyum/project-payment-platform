import React from 'react'
import { Routes, Route } from "react-router-dom";

import { Home, Login, Register } from '../Views';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
        </Routes>
    )
}

export default MainRoutes