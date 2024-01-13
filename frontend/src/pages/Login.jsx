import React, { useEffect, useState } from 'react'
// import useAxios from '../hooks/useAxios'
import axios from "axios"
import { ClipLoader } from "react-spinners"

const Login = () => {

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState(null)

  useEffect(() => {

    const login = async () => {

      try {

        const { data } = await axios.post("http://localhost:3001/login", {
          email: "m.khairallah@mundiapolis.ma",
          password: "12345678"
        })

        console.log("Data => ",data)

        setResponse(data)

      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }

    }

    login()

  }, [])

  return (

     <div>
      login
     </div>
  )
}

export default Login