import React, { useEffect, useState } from 'react'

import { GetUserInformation } from '../APIs/Users.api'

const Protected = (props) => {
    const [userData, setUserData] = useState(null)
    const { children } = props

    const GetData = async () => {
        try {
            const response = await GetUserInformation()
            if (response.success) {
                setUserData(response.data)
            }
        } catch (error) {
            toast.error(error.message, { duration: 4000, position: 'top-right' })
        }
    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <>{children}</>
    )
}

export default Protected