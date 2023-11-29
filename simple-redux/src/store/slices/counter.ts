import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CounterStore = {
    count: number;
    show: boolean;
};

const INITIAL_STATE: CounterStore = {
    count: 0,
    show: true,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: INITIAL_STATE,
    reducers: {
        increment(state) {
            state.count++;
        },
        increase(state, action: PayloadAction<number>) {
            state.count += action.payload;
        },
        decrement(state) {
            state.count--;
        },
        decrease(state, action: PayloadAction<number>) {
            state.count -= action.payload;
        },
        toggleShow(state, action: PayloadAction<boolean | undefined>) {
            state.show = action.payload ?? !state.show;
        },
    },
});

export const actions = counterSlice.actions;
export default counterSlice.reducer;
