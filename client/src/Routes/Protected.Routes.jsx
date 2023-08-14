import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import { GetUserInformation } from '../APIs/Users.api'
import { setUser } from "../Redux/UsersSlice"
import { DashboardLayout } from '../Layouts/Dashboard.Layout';

const ProtectedRoutes = (props) => {
    // const [userData, setUserData] = useState(null)
    const { user } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { children } = props

    const GetData = async () => {
        try {
            const response = await GetUserInformation()
            if (response.success) {
                // setUserData(response.data)
                dispatch(setUser(response.data))
            } else {
                toast.error(response.message, { duration: 4000, position: 'top-right' })
                navigate("/Login")
            }
        } catch (error) {
            toast.error(error.message, { duration: 4000, position: 'top-right' })
            navigate("/Login")
        }
    }

    useEffect(() => {
        if (localStorage.getItem("Token")) {
            if (!user) {
                GetData()
            }
        } else {
            navigate("/Login")
        }
    }, [])

    return user && (
        <DashboardLayout>{children}</DashboardLayout>
    )
}

export default ProtectedRoutes