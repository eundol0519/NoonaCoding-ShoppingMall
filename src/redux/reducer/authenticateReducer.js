import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: '',
    password: '',
    authenticate: false
}

const authenticateSlice = createSlice({
    name: "authenticate",
    initialState: initialState,
    reducers: {
        login(state, action) {
            state.id = action.payload.id;
            state.password = action.payload.password;
            state.authenticate = true;
        },
        logout(state) {
            state.id = '';
            state.password = '';
            state.authenticate = false;
        }
    }
})

export const authenticateActions = authenticateSlice.actions
export default authenticateSlice.reducer