import React, { useState, createContext, useMemo, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UseLocalStorage from './UseLocalStorage'
import useAxios from '../hooks/useAxios'
import axios from 'axios'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

  const [jwt, setJwt] = UseLocalStorage("jwt", null)

  const navigate = useNavigate()

  const login = async (data) => {
    try {

      const dt = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, data) 

      setJwt(dt.data)

      navigate("/home", {replace: true})

    } catch(error) {
      console.log(error.message)
    }
  }

  const logout = async () => {
    setJwt(null)
    navigate("/login", { replace: true })
  }

  const value = useMemo(() => ({
    login,
    logout,
    jwt
  }), [jwt])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext