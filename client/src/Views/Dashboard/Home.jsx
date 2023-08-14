import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

import { DashboardLayout } from '../../Layouts/Dashboard.Layout'
import { GetUserInformation } from '../../APIs/Users.api'

const DashboardHome = () => {
  const [userData, setUserData] = useState(null)

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
    <DashboardLayout>
      DashboardHome
    </DashboardLayout>
  )
}

export default DashboardHome