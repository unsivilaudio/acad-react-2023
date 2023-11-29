import ProductItem from '@/components/shop/ProductItem';

export default function Products() {
    return (
        <section>
            <h2 className='mx-auto my-8 text-center uppercase text-[#eee]'>
                Buy your favorite products
            </h2>
            <ul>
                <ProductItem
                    title='Test'
                    price={6}
                    description='This is a first product - amazing!'
                />
            </ul>
        </section>
    );
}
