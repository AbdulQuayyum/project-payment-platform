import { AxiosInstance } from "./Main";

// Verify Receiver's Account
export const VerifyAccount = async (payload) => {
    try {
        const { data } = await AxiosInstance.post(`${import.meta.env.VITE_SERVER_URL}/v1/Transactions/VerifyAccount`, payload)
        return data
    } catch (error) {
        return error.response.data
    }
}

// Transfer Funds
export const TransferFunds = async (payload) => {
    try {
        const { data } = await AxiosInstance.post(`${import.meta.env.VITE_SERVER_URL}/v1/Transactions/TransferFunds`, payload)
        return data
    } catch (error) {
        return error.response.data
    }
}

// Get All Transactions for a user
export const GetAllTransactionsByUser = async () => {
    try {
        const { data } = await AxiosInstance.post(`${import.meta.env.VITE_SERVER_URL}/v1/Transactions/GetAllTransactionsByUser`)
        return data
    } catch (error) {
        return error.response.data
    }
}