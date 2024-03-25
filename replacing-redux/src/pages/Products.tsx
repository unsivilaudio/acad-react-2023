import useProductsStore from '@/store/custom/hooks/use-products-store';
import ProductItem from '@/components/products/ProductItem';

export default function ProductsPage() {
    const [state] = useProductsStore();

    const productList = state.products;
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
