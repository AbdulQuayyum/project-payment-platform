import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./UsersSlice"

const Store = configureStore({
    reducer: {
        users: UsersReducer
    }
})

export default Store