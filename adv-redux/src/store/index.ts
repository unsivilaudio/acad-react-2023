import { configureStore } from '@reduxjs/toolkit';

import ui from '@/store/slices/ui';
import cart from '@/store/slices/cart';
import cartAsyncNotify from '@/store/middleware/cart-async-notify';

const store = configureStore({
    middleware: (gdm) => gdm().concat(cartAsyncNotify),
    reducer: {
        ui,
        cart,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
