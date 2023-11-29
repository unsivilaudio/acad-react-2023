import type { Product } from '@/types/product';
import ProductItem from '@/components/shop/ProductItem';

const DUMMY_PRODUCTS: Product[] = [
    {
        id: 'p1',
        price: 6,
        title: 'My First book',
        description: 'The first book I ever wrote',
    },
    {
        id: 'p2',
        price: 12.99,
        title: 'My Favorite Book',
        description: 'This is the best book ever written.',
    },
];

export default function Products() {
    return (
        <section>
            <h2 className='mx-auto my-8 text-center text-2xl font-bold uppercase text-[#eee]'>
                Buy your favorite products
            </h2>
            <ul>
                {DUMMY_PRODUCTS.map((product) => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </ul>
        </section>
    );
}
