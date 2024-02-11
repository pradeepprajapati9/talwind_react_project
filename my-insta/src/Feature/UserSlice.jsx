import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isLoading: true
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginuser: (state, action) => {
            state.user = action.payload;

        },
        logoutuser: (state) => {
            state.user = null
        },
        setloading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export const { loginuser, logoutuser, setloading } = userSlice.actions