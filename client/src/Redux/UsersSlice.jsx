import { createSlice } from "@reduxjs/toolkit"

const UsersSlice = createSlice({
    name: "users",
    initialState: {
        user: null
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        }
    }
})

export const { setUser } = UsersSlice.actions
export default UsersSlice.reducer