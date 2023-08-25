import React from 'react'
import { Routes, Route } from "react-router-dom";

import { ProtectedRoutes, PublicRoutes } from "./Index"
import { Home, Login, Register, DashboardHome, Requests, Transactions, Users } from '../Views/Index';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<PublicRoutes><Login /></PublicRoutes>} />
            <Route path='/Register' element={<PublicRoutes><Register /></PublicRoutes>} />
            <Route path='/Dashboard' element={<ProtectedRoutes><DashboardHome /></ProtectedRoutes>} />
            <Route path='/Requests' element={<ProtectedRoutes><Requests /></ProtectedRoutes>} />
            <Route path='/Transactions' element={<ProtectedRoutes><Transactions /></ProtectedRoutes>} />
            <Route path='/Users' element={<ProtectedRoutes><Users /></ProtectedRoutes>} />
        </Routes>
    )
}

export default MainRoutes