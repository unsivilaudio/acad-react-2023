import { twMerge } from 'tailwind-merge';
import Card from '@/components/ui/Card';

import { useStore } from '@/store/custom/store';
import { ProductsActions, ProductsStore } from '@/store/custom/products-store';

interface ProductItemProps {
    id: string;
    isFav: boolean;
    title: string;
    description: string;
}

export default function ProductItem({
    id,
    title,
    description,
    isFav,
}: ProductItemProps) {
    const dispatch = useStore<ProductsStore, ProductsActions>()[1];

    function toggleFavHandler() {
        dispatch('TOGGLE_FAVORITE', id);
    }

    return (
        <Card className='mb-4'>
            <div>
                <h2 className={twMerge('my-2', isFav && 'text-[#ff2058]')}>
                    {title}
                </h2>
                <p className='my-2'>{description}</p>
                <button
                    className={twMerge('', !isFav && 'button-outline')}
                    onClick={toggleFavHandler}
                >
                    {isFav ? 'Un-Favorite' : 'Favorite'}
                </button>
            </div>
        </Card>
    );
}
