import { createSlice } from "@reduxjs/toolkit"

const UsersSlice = createSlice({
    name: "users",
    initialState: {
        user: null,
        reloadUser: false,
        removeUser: false
    },
    reducers: {
        setUser(state, action) {
            if (state.removeUser) {
                state.user = null;
            } else {
                state.user = action.payload;
            }
        },
        setReloadUser(state, action) {
            state.reloadUser = action.payload
        },
        setRemoveUser(state, action) {
            state.removeUser = action.payload;
        }
    }
})

export const { setUser, setReloadUser, setRemoveUser } = UsersSlice.actions
export default UsersSlice.reducer