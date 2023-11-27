import {
    createContext,
    useContext,
    useReducer,
    type PropsWithChildren,
} from 'react';
import { produce } from 'immer';

export type CartItem = {
    id: string;
    name: string;
    quantity: number;
    price: number;
};

type CartContextValue = {
    progress: 'cart' | 'checkout' | '';
    cart: {
        items: CartItem[];
        totalAmount: number;
    };
    addToCart(item: Omit<CartItem, 'quantity'>): void;
    removeFromCart(id: string): void;
    openCart(): void;
    openCheckout(): void;
    closeCart(): void;
    clearCart(): void;
};

const CartContext = createContext<CartContextValue | null>(null);
export const useCartCtx = () => {
    const ctx = useContext(CartContext);
    if (!ctx) {
        throw new Error(
            'You must use this hook inside the scope of the <CartContextProvider />',
        );
    }

    return ctx;
};

const INITIAL_STATE: Pick<CartContextValue, 'cart' | 'progress'> = {
    cart: { items: [], totalAmount: 0 },
    progress: '',
};

enum Actions {
    'ADD_CART_ITEM',
    'REMOVE_CART_ITEM',
    'SHOW_CART',
    'SHOW_CHECKOUT',
    'CLOSE_CART',
    'CLEAR_CART',
}

type AddItem = {
    type: Actions.ADD_CART_ITEM;
    payload: Omit<CartItem, 'quantity'>;
};

type RemoveItem = {
    type: Actions.REMOVE_CART_ITEM;
    payload: { id: string };
};

type ShowCart = {
    type: Actions.SHOW_CART;
    payload?: never;
};
type ShowCheckout = {
    type: Actions.SHOW_CHECKOUT;
    payload?: never;
};
type CloseCart = {
    type: Actions.CLOSE_CART;
    payload?: never;
};

type ClearCart = {
    type: Actions.CLEAR_CART;
    payload?: never;
};

type CartReducerActions =
    | AddItem
    | RemoveItem
    | ShowCart
    | ShowCheckout
    | CloseCart
    | ClearCart;

const cartReducer = produce((state, action: CartReducerActions) => {
    const { type, payload } = action;
    let itemIdx: number;
    switch (type) {
        case Actions.ADD_CART_ITEM:
            itemIdx = state.cart.items.findIndex(
                (item) => item.id === action.payload.id,
            );
            if (itemIdx > -1) {
                state.cart.items[itemIdx].quantity++;
            } else {
                state.cart.items.push({ ...payload, quantity: 1 });
            }
            state.cart.totalAmount = state.cart.items.reduce(
                (a, b) => a + b.price * b.quantity,
                0,
            );
            break;
        case Actions.REMOVE_CART_ITEM:
            itemIdx = state.cart.items.findIndex(
                (item) => item.id === action.payload.id,
            );
            if (itemIdx > -1) {
                if (state.cart.items[itemIdx].quantity > 1) {
                    state.cart.items[itemIdx].quantity--;
                } else {
                    state.cart.items = state.cart.items.filter(
                        (item) => item.id !== payload.id,
                    );
                }
                state.cart.totalAmount = state.cart.items.reduce(
                    (a, b) => a + b.price * b.quantity,
                    0,
                );
            }
            break;
        case Actions.SHOW_CART:
            state.progress = 'cart';
            break;
        case Actions.CLOSE_CART:
            state.progress = '';
            break;
        case Actions.SHOW_CHECKOUT:
            state.progress = 'checkout';
            break;
        case Actions.CLEAR_CART:
            state.cart.items = [];
            state.cart.totalAmount = 0;
            state.progress = '';
            break;
    }
    return state;
}, INITIAL_STATE);

export default function CartContextProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    function addToCart(item: Omit<CartItem, 'quantity'>) {
        dispatch({ type: Actions.ADD_CART_ITEM, payload: item });
    }

    function removeFromCart(id: string) {
        dispatch({ type: Actions.REMOVE_CART_ITEM, payload: { id } });
    }

    function openCart() {
        dispatch({ type: Actions.SHOW_CART });
    }

    function openCheckout() {
        dispatch({ type: Actions.SHOW_CHECKOUT });
    }

    function closeCart() {
        dispatch({ type: Actions.CLOSE_CART });
    }

    function clearCart() {
        dispatch({ type: Actions.CLEAR_CART });
    }

    return (
        <CartContext.Provider
            value={{
                ...state,
                addToCart,
                removeFromCart,
                openCart,
                openCheckout,
                closeCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
