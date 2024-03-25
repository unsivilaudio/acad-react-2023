import { ProductsContext } from '@/store/context/products-context';
import { useContext } from 'react';

export default function useProductsContext() {
    const ctx = useContext(ProductsContext);

    if (!ctx) {
        throw new Error(
            'You must use this hook in the context of a <ProductsContextProvider> component!',
        );
    }

    return ctx;
}
