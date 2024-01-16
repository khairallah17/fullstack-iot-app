import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

export const loginService = async (loginCredentials) => {

    try {

        const { data } = await axios.post("/login", loginCredentials)

        return data

    } catch (error) {
        throw new Error("[LOGIN SERVICE] Error: cannot make request")
    }

}
