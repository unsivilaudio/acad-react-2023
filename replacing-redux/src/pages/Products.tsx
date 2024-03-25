import type { Product } from '@/models/product';

import ProductItem from '@/components/products/ProductItem';
import useProductsContext from '@/store/context/hooks/use-products-context';

export default function ProductsPage() {
    const productsCtx = useProductsContext();
    const productList: Product[] = productsCtx.products;
    return (
        <ul className='products-list'>
            {productList.map((prod) => (
                <ProductItem
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    description={prod.description}
                    isFav={prod.isFavorite}
                />
            ))}
        </ul>
    );
}
