import React, { createContext, useEffect, useState } from 'react'
import { addDeviceService, getAllCategoriesService } from '../services/Devices.service'
import { jwtDecode } from "jwt-decode";
import useAuth from '../hooks/useAuth';
import UseLocalStorage from './UseLocalStorage';

const GlobalContext = createContext({})

export const GlobalContextProvider = ({children}) => {

    const [ storedValue, setValue ] = UseLocalStorage("jwt")
  
    const [activeNav, setActiveNav] = useState("home")

    const [token ,setToken] = useState(storedValue)

    useEffect(() => {
        const init = async () => {
            try {

                await jwtDecoder()

            } catch (error) {
                console.log(error.message)
            }
        }

        init()
    }, [])

    const [deviceName, setDeviceName] = useState("")
    const [deviceSerie, setDeviceSerie] = useState("")
    const [deviceImage, setDeviceImage] = useState("")
    const [deviceLimit, setDeviceLimit] = useState(500)
    const [deviceCategory, setDeviceCategory] = useState("")
    const [deviceUser, setDeviceUser] = useState("")

    const getAllCategories = async () => {

        try {

            const data = await getAllCategoriesService() 

            return data

        } catch (error) {
            console.log(error);
        }

    }

    const jwtDecoder = async () => {

        try {

            const decoded = jwtDecode(storedValue)

            setDeviceUser(decoded.id)

        } catch (error) {
            console.log(error)
        }

    }

    const addDevice = async () => {

        try {

            const form = new FormData()

            form.append("deviceName", deviceName)
            form.append("deviceSeries", deviceSerie)
            form.append("consumptionLimit", deviceLimit)
            form.append("deviceImage", deviceImage)
            form.append("user", deviceUser)
            form.append("category", deviceCategory)

            console.log(storedValue)

            const data = await addDeviceService(form, storedValue)

            console.log(data)

        } catch (error) {
            console.log(error.message)
        }

    }

    const value = {
        activeNav,
        setActiveNav,
        getAllCategories,
        jwtDecoder,
        addDevice,
        deviceName, setDeviceName,
        deviceSerie, setDeviceSerie,
        deviceImage, setDeviceImage,
        deviceLimit, setDeviceLimit,
        deviceCategory, setDeviceCategory,
        deviceUser,
        token
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext