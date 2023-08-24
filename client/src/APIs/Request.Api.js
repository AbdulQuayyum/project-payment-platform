import { AxiosInstance } from "./Main";

// Get All Requests for a User
export const GetAllRequestsByUser = async () => {
    try {
        const { data } = await AxiosInstance.post(`${import.meta.env.VITE_SERVER_URL}/v1/Requests/GetAllRequestsByUser`)
        return data
    } catch (error) {
        return error.response.data
    }
}

// Send a Request to another user
export const SendRequest = async (request) => {
    try {
        const { data } = await AxiosInstance.post(`${import.meta.env.VITE_SERVER_URL}/v1/Requests/SendRequest`, request)
        return data
    } catch (error) {
        return error.response.data
    }
}