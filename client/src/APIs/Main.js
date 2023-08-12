import axios from "axios"

export const AxiosInstance = axios.create({
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("Token")}`
    }
})