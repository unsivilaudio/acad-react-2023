import type {
    ProductsStore,
    ProductsActions,
} from '@/store/custom/products-store';
import configurStore from '@/store/custom/products-store';
import { useStore } from '@/store/custom/store';

export default function useProductsStore() {
    const store = useStore<ProductsStore, ProductsActions>();

    if (!store) {
        configurStore();
    }

    return store;
}
