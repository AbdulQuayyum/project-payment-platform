import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import { GetUserInformation } from '../APIs/Users.Api'
import { setUser, setReloadUser, setRemoveUser } from "../Redux/UsersSlice"
import { DashboardLayout } from '../Layouts/Dashboard.Layout';
import { Loader } from "../Components/Index"

const ProtectedRoutes = (props) => {
    // const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const { user, reloadUser } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { children } = props
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    )

    const GetData = async () => {
        setLoading(true)
        try {
            const response = await GetUserInformation()
            if (response.success) {
                setLoading(false)
                dispatch(setUser(response.data))
            } else if (response.message === "jwt malformed") {
                // async function nextPage() {
                //     await delay(2000)
                //     window.location.reload()
                // }
                // nextPage()
                window.location.reload()
                setLoading(false)
            } else {
                setLoading(false)
                toast.error(response.message, { duration: 4000, position: 'top-right' })
                async function nextPage() {
                    await delay(2000)
                    localStorage.removeItem("Token")
                    dispatch(setRemoveUser(true));
                    navigate("/Login")
                }
                nextPage()
            }
            dispatch(setReloadUser(false))
        } catch (error) {
            setLoading(false)
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
        <DashboardLayout>
            {children}
            {loading && <Loader />}
        </DashboardLayout>
    )
}

export default ProtectedRoutes