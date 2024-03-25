import type { Product } from '@/models/product';

import { products } from '@/models/mock/dummy-data';
import { initStore } from '@/store/custom/store';

export type ProductsStore = {
    products: Product[];
};

export type ProductsActions = {
    TOGGLE_FAVORITE(state: ProductsStore, payload: string): ProductsStore;
};

const actions: ProductsActions = {
    TOGGLE_FAVORITE(curState: { products: Product[] }, productId: string) {
        const prodIndex = curState.products.findIndex(
            (p: Product) => p.id === productId,
        );
        const newFavStatus = !curState.products[prodIndex].isFavorite;
        const updatedProducts = [...curState.products];
        updatedProducts[prodIndex] = {
            ...curState.products[prodIndex],
            isFavorite: newFavStatus,
        };

        return {
            products: updatedProducts,
        };
    },
};

const configurStore = () => {
    initStore(actions, { products: products });
};

export default configurStore;
