import {
    createAsyncThunk,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';
import type { Product } from '@/types/product';

export type CartItem = Product & {
    quantity: number;
    totalPrice: number;
};

export type CartStore = {
    items: CartItem[];
    totalQuantity: number;
    changed: boolean;
};

const INITIAL_STATE: CartStore = {
    items: [],
    totalQuantity: 0,
    changed: false,
};

const fetchCart = createAsyncThunk<CartItem[]>('cart/fetchCart', async () => {
    const response = await fetch(
        'https://nextjs-course-fe995-default-rtdb.firebaseio.com/cart.json',
    );

    if (!response.ok) {
        throw new Error('Failed to fetch cart.');
    }

    const data = await response.json();

    return data.items as CartItem[];
});

const putCart = createAsyncThunk<null, Omit<CartStore, 'changed'>>(
    'cart/putCart',
    async (payload: Omit<CartStore, 'changed'>) => {
        const response = await fetch(
            'https://nextjs-course-fe995-default-rtdb.firebaseio.com/cart.json',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            },
        );

        if (!response.ok) {
            throw new Error('Failed to update cart on Firebase!');
        }

        return null;
    },
);

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addItemToCart(
            state,
            action: PayloadAction<Omit<CartItem, 'quantity' | 'totalPrice'>>,
        ) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id,
            );
            if (!existingItem) {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;
            }
            state.changed = true;
            state.totalQuantity = state.items.reduce(
                (a, b) => a + b.quantity,
                0,
            );
        },
        removeItemFromCart(state, action: PayloadAction<string>) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (!existingItem) return;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
            state.changed = true;
            state.totalQuantity = state.items.reduce(
                (a, b) => a + b.quantity,
                0,
            );
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchCart.fulfilled, (state, { payload }) => {
            state.changed = false;
            state.items = payload;
            state.totalQuantity = payload.reduce((a, b) => a + b.quantity, 0);
        });
        builder.addCase(fetchCart.rejected, () => {
            console.log('Unable to retrieve cart data.');
        });
        builder.addCase(putCart.fulfilled, () => {
            console.log('Successfully updated cart database.');
        });
    },
});

export const actions = { ...cartSlice.actions, fetchCart, putCart };
export default cartSlice.reducer;
