import { createSlice } from "@reduxjs/toolkit"

const UsersSlice = createSlice({
    name: "users",
    initialState: {
        user: null,
        reloadUser: false
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setReloadUser(state, action) {
            state.reloadUser = action.payload
        }
    }
})

export const { setUser, setReloadUser } = UsersSlice.actions
export default UsersSlice.reducer