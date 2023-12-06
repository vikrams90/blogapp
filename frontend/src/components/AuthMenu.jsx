import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthMenu = () => {
  const {isLoggedIn} = useSelector(state=>state.users)
  // const isLoggedIn =true
  if (!isLoggedIn) {
    return (
      <Navigate to={"/auth"}/>
      )
  }
  return (
    <Navigate to={"/blog"}/>
  )
}

export default AuthMenu
