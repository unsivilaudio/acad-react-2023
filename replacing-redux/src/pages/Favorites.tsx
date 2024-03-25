import useProductsStore from '@/store/custom/hooks/use-products-store';
import FavoriteItem from '@/components/favorites/FavoriteItem';

export default function Favorites() {
    const [state] = useProductsStore();
    const favoriteProducts = state.products.filter((p) => p.isFavorite);

    let content = <p className='m-12 text-center'>Got no favorites yet!</p>;

    if (favoriteProducts.length > 0) {
        content = (
            <ul className='m-12'>
                {favoriteProducts.map((prod) => (
                    <FavoriteItem
                        key={prod.id}
                        id={prod.id}
                        title={prod.title}
                        description={prod.description}
                    />
                ))}
            </ul>
        );
    }
    return content;
}
