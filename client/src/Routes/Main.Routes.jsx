import React from 'react'
import { Routes, Route } from "react-router-dom";

import ProtectedRoutes from './Protected.Routes';
import { Home, Login, Register, DashboardHome } from '../Views/Index';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Dashboard' element={<ProtectedRoutes><DashboardHome /></ProtectedRoutes>} />
        </Routes>
    )
}

export default MainRoutes