import type { Product } from '@/models/product';

import { products } from '@/models/mock/dummy-data';
import ProductItem from '@/components/products/ProductItem';

export default function ProductsPage() {
    const productList: Product[] = products;
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
