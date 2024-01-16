import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useGlobalContextHook from "../hooks/useGlobalContextHook"

const ProtectedRoute = ({children}) => {

    const { jwt, logout } = useAuth()
    const { activeNav, setActiveNav } = useGlobalContextHook()


    if (!jwt) {
        console.log(jwt)
        return (
            <Navigate to="/login" />
        )
    }

    return (
        <div className="relative bg-blue-50 overflow-hidden max-h-screen">
            <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
                <div className="flex flex-col justify-between h-full">
                <div className="flex-grow">
                    <div className="px-4 py-6 text-center border-b">
                    <h1 className="text-xl font-bold leading-none"><span className="text-blue-700">WattWaterWise</span> App</h1>
                    </div>
                    <div className="p-4">
                    <ul className="space-y-1">
                        <li>
                        <Link to="/home" onClick={() => setActiveNav("home")} className={`${activeNav == "home" ? "bg-blue-200  text-blue-900" : ""} flex items-center rounded-xl font-bold text-sm py-3 px-4`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill text-lg mr-4" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                            </svg>Acceuille
                        </Link>
                        </li>
                        <li>
                        <Link to="/devices" onClick={() => setActiveNav("devices")} className={`${activeNav == "devices" ? "bg-blue-200  text-blue-900" : ""} flex items-center rounded-xl font-bold text-sm py-3 px-4`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-device-ssd-fill text-lg mr-4" viewBox="0 0 16 16">
                            <path d="M5 8V4h6v4z"/>
                            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m9 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M3.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m9.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4.75 3h6.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-6.5A.75.75 0 0 1 4 8.25v-4.5A.75.75 0 0 1 4.75 3M5 12h6a1 1 0 0 1 1 1v2h-1v-2h-.75v2h-1v-2H8.5v2h-1v-2h-.75v2h-1v-2H5v2H4v-2a1 1 0 0 1 1-1"/>
                            </svg>Dispositifs
                        </Link>
                        </li>
                        <li>
                        <Link to="/consumption" onClick={() => setActiveNav("consumption")} className={`${activeNav == "consumption" ? "bg-blue-200  text-blue-900" : ""} flex items-center rounded-xl font-bold text-sm py-3 px-4`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-fill text-lg mr-4" viewBox="0 0 16 16">
                            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
                            </svg>Consomations
                        </Link>
                        </li>
                        <li>
                        <Link to="/settings" onClick={() => setActiveNav("settings")} className={`${activeNav == "settings" ? "bg-blue-200  text-blue-900" : ""} flex items-center rounded-xl font-bold text-sm py-3 px-4`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill text-lg mr-4" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                            </svg>Paramètres
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div onClick={logout} className="p-4 cursor-pointer">
                    <button type="button" className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                    </button>
                        <span className="font-bold text-sm ml-2">Déconnexion</span>
                </div>
                </div>
            </aside>
            <main className="ml-60 pt-5 max-h-screen overflow-auto">
                <div className='h-screen px-6 py-8'>
                    <Outlet/>
                </div>
            </main>
        </div>
    )
}

export default ProtectedRoute