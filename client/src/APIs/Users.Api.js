import { AxiosInstance } from "./Main";

// Login into User Account
export const LoginUser = async (payload) => {
    try {
        const { data } = await AxiosInstance.post(`${import.meta.env.VITE_SERVER_URL}/v1/Users/Login`, payload)
        return data
    } catch (error) {
        return error.response.data
    }
}

// Create a new User Account
export const RegisterUser = async (payload) => {
    try {
        const { data } = await AxiosInstance.post(`${import.meta.env.VITE_SERVER_URL}/v1/Users/Register`, payload)
        return data
    } catch (error) {
        return error.response.data
    }
}

// Get User's Information

export const GetUserInformation = async () => {
    try {
        const { data } = await AxiosInstance.post(`${import.meta.env.VITE_SERVER_URL}/v1/Users/GetUserInformation`)
        return data
    } catch (error) {
        return error.response.data
    }
}