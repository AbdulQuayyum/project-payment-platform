import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

import { GetUserInformation } from '../APIs/Users.api'

const ProtectedRoutes = (props) => {
    const [userData, setUserData] = useState(null)
    const { children } = props
    const navigate = useNavigate()

    const GetData = async () => {
        try {
            const response = await GetUserInformation()
            if (response.success) {
                setUserData(response.data)
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
            if (!userData) {
                GetData()
            }
        } else {
            navigate("/Login")
        }
    }, [])

    return (
        <>{children}</>
    )
}

export default ProtectedRoutes