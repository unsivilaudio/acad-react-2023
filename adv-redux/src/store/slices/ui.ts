import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type UINotification = {
    status: 'pending' | 'success' | 'error';
    title: string;
    message: string;
};

export type UIStore = {
    cartIsVisible: boolean;
    notificaton: UINotification | null;
};

const INITIAL_STATE: UIStore = {
    cartIsVisible: false,
    notificaton: null,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: INITIAL_STATE,
    reducers: {
        setNotification(state, { payload }: PayloadAction<UINotification>) {
            state.notificaton = payload;
        },
        clearNotification(state) {
            state.notificaton = null;
        },
        toggleCart(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
    },
});

export const actions = uiSlice.actions;
export default uiSlice.reducer;
