import React from 'react'
import { Routes, Route } from "react-router-dom";

import { ProtectedRoutes, PublicRoutes } from "./Index"
import { Home, Login, Register, DashboardHome, Transactions } from '../Views/Index';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<PublicRoutes><Login /></PublicRoutes>} />
            <Route path='/Register' element={<PublicRoutes><Register /></PublicRoutes>} />
            <Route path='/Dashboard' element={<ProtectedRoutes><DashboardHome /></ProtectedRoutes>} />
            <Route path='/Transactions' element={<ProtectedRoutes><Transactions /></ProtectedRoutes>} />
        </Routes>
    )
}

export default MainRoutes