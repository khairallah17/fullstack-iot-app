import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

export const getAllDevicesService = async (id, token) => {
    try {

        console.log(id)

        const { data } = await axios.get(`/devices/user/${id}`, {
            headers: {
                "Authorization": token
            }
        });

        return data

    } catch(error) {
        throw new Error("cannot get All Devices")
    }
}

export const addDeviceService = async (deviceData, token) => {

    try {

        const { data } = await axios.post("/devices", deviceData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": token
            },
        })

        return data

    } catch (error) {
        throw new Error(`[ADD DEVICES SERVICE] Error: ${error.message}`)
    }

}

export const updateDeviceService = async (deviceId, deviceData, token) => {

    try {

        const { data } = await axios.patch(`/devices/${deviceId}`, deviceData, {
            headers: {
                Authorization: token
            }
        })

        return data

    } catch (error) {
        throw new Error(`[DELETE DEVICE SERVICE] Error: ${error.message}`)
    }

}

export const deleteDeviceService= async (deviceId, token) => {

    try {

        console.log(token)

        const { data } = await axios.delete(`/devices/${deviceId}`, {
            headers: {
                "Authorization": token
            }
        })

        return data

    } catch (error) {
        throw new Error(`[DELETE DEVICES SERVICE] Error: ${error.message}`)
    }

}

export const getAllCategoriesService = async () => {
    
    try {

        const { data } = await axios.get("/categories")

        return data

    } catch(error) {
        throw new Error(`[GET ALL CATEGORIES SERVICE] Error: ${error.message}`)
    }

}