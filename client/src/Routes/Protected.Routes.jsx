import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import { GetUserInformation } from '../APIs/Users.api'
import { setUser, setReloadUser } from "../Redux/UsersSlice"
import { DashboardLayout } from '../Layouts/Dashboard.Layout';

const ProtectedRoutes = (props) => {
    // const [userData, setUserData] = useState(null)
    const { user, reloadUser } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { children } = props
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    )

    const GetData = async () => {
        try {
            const response = await GetUserInformation()
            if (response.success) {
                dispatch(setUser(response.data))
            }
            else if (response.message === "jwt malformed") {
                async function nextPage() {
                    await delay(2000)
                    window.location.reload()
                }
                nextPage()
            } else {
                toast.error(response.message, { duration: 4000, position: 'top-right' })
                navigate("/Login")
            }
            dispatch(setReloadUser(false))
        } catch (error) {
            toast.error(error.message, { duration: 4000, position: 'top-right' })
            navigate("/Login")
        }
    }

    useEffect(() => {
        if (localStorage.getItem("Token") !== null) {
            if (!user) {
                GetData()
            }
        } else {
            navigate("/Login")
        }
    }, [])

    useEffect(() => {
        if (reloadUser) {
            GetData()
        }
    }, [reloadUser])

    return user && (
        <DashboardLayout>{children}</DashboardLayout>
    )
}

export default ProtectedRoutes