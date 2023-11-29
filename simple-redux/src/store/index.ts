import { configureStore } from '@reduxjs/toolkit';
import counter from '@/store/slices/counter';
import auth from '@/store/slices/auth';

const store = configureStore({
    reducer: {
        auth,
        counter,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
