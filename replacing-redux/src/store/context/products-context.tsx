import { createContext, useReducer, type PropsWithChildren } from 'react';

import { Product } from '@/models/product';
import { products } from '@/models/mock/dummy-data';

type ProductsContextState = {
    products: Product[];
};

type ProductsContextValue = ProductsContextState & {
    toggleFavorite(id: string): void;
};

export const ProductsContext = createContext<ProductsContextValue | null>(null);

const __INITIAL_STATE: ProductsContextState = {
    products: products,
};

type ADD_FAVORITE = {
    type: 'ADD_FAVORITE';
    payload: {
        id: string;
    };
};

type REMOVE_FAVORITE = {
    type: 'REMOVE_FAVORITE';
    payload: {
        id: string;
    };
};

type ProductReducerActions = ADD_FAVORITE | REMOVE_FAVORITE;

function productsReducer(
    state: ProductsContextState,
    action: ProductReducerActions,
) {
    let productIdx: number;
    switch (action.type) {
        case 'ADD_FAVORITE':
            productIdx = state.products.findIndex(
                (p) => p.id === action.payload.id,
            );
            if (productIdx >= 0) {
                const productItem = state.products[productIdx];
                productItem.isFavorite = true;
                const updatedProducts = [...state.products];
                updatedProducts[productIdx] = productItem;
                return {
                    ...state,
                    products: updatedProducts,
                };
            }
            return state;
        case 'REMOVE_FAVORITE':
            productIdx = state.products.findIndex(
                (p) => p.id === action.payload.id,
            );
            if (productIdx >= 0) {
                const productItem = state.products[productIdx];
                productItem.isFavorite = false;
                const updatedProducts = [...state.products];
                updatedProducts[productIdx] = productItem;
                return {
                    ...state,
                    products: updatedProducts,
                };
            }
            return state;
        default:
            return state;
    }
}

export default function ProductsContextProvider({
    children,
}: PropsWithChildren) {
    const [state, dispatch] = useReducer(productsReducer, __INITIAL_STATE);

    function toggleFavorite(id: string) {
        const productItem = state.products.find((p) => p.id === id);
        if (productItem?.isFavorite) {
            dispatch({ type: 'REMOVE_FAVORITE', payload: { id } });
        } else if (productItem?.isFavorite === false) {
            dispatch({ type: 'ADD_FAVORITE', payload: { id } });
        }
    }

    const productsContextValue: ProductsContextValue = {
        ...state,
        toggleFavorite,
    };

    return (
        <ProductsContext.Provider value={productsContextValue}>
            {children}
        </ProductsContext.Provider>
    );
}
