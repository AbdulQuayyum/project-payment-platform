import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PublicRoutes = (props) => {
  const { children } = props
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      navigate("/Dashboard")
    }
  })

  return (
    <>{children}</>
  )
}

export default PublicRoutes