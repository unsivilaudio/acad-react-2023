import { twMerge } from 'tailwind-merge';
import Card from '@/components/ui/Card';

interface ProductItemProps {
    id: string;
    isFav: boolean;
    title: string;
    description: string;
}

export default function ProductItem({
    title,
    description,
    isFav,
}: ProductItemProps) {
    //   const dispatch = useDispatch();
    function toggleFavHandler() {
        // dispatch(toggleFav(props.id));
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
