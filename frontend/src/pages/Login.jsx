import React, { useEffect, useState } from 'react'
// import useAxios from '../hooks/useAxios'
import axios from "axios"
import { ClipLoader } from "react-spinners"
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Login = () => {

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState(null)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useAuth()

  const loginMethod = async (e) => {
    e.preventDefault()
    await login({
      email,
      password
    })
  }

  return (

     <div className="container h-screen mx-auto">
      <h1 className='font-bold text-5xl text-center'>Mohammed khairallah</h1>
      <h1 className='font-bold text-5xl text-center'>Aya Malki</h1>
      <h1 className='font-bold text-5xl text-center'>Saad Haliba</h1>
       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/logo.svg"
            alt="wattwaterwise"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Connectez-vous
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={loginMethod} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Address email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="outline-none px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Mot de pass
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                    mot de pass oublier?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="outline-none px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Se Connecter
              </button>
            </div>
          </form>

          <p className="mt-10 text-c== nullenter text-sm text-gray-500">
            vous n&apos;avez pas un compte?{' '}
            <a href="#" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
              Creez un compte
            </a>
          </p>
        </div>
      </div>
     </div>
  )
}

export default Login