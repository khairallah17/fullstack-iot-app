import { useState, useEffect } from "react";
import axios from "axios"

axios.defaults.url = import.meta.env.VITE_BACKEND_URL

const useAxios = ({url, method, body = null, headers = null}) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [response, setResponse] = useState({})

    const fetchData = async () => {
        axios[method](url, body, headers)
            .then((res) => {
                console.log("response")
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchData()
    }, [method, url, body, headers])

    return {response, loading, error}

}

export default useAxios