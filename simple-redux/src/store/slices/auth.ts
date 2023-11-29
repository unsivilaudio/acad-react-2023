import { createSlice } from '@reduxjs/toolkit';

export type AuthStore = {
    isLoggedIn: boolean;
};

const INITIAL_STATE: AuthStore = {
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
});

export const actions = authSlice.actions;
export default authSlice.reducer;
