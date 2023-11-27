import Button from '@/components/ui/Button';
import { CartItem, useCartCtx } from '@/context/cart-context';

export type MealItemProps = {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
};

export default function MealItem({
    id,
    name,
    description,
    image,
    price,
}: MealItemProps) {
    const { addToCart } = useCartCtx();

    function handleAddToCart() {
        const item: Omit<CartItem, 'quantity'> = {
            id,
            name,
            price: +price,
        };

        addToCart(item);
    }

    return (
        <li className='overflow-hidden rounded-2xl bg-[#1d1a16] text-center shadow-[0_1px_6px_rgba(0,0,0,0.3)]'>
            <article className='flex h-full flex-col items-center justify-between'>
                <img
                    className='h-80 w-full object-cover'
                    src={'http://localhost:8080/' + image}
                    alt={name}
                />
                <h3 className='my-3 text-2xl font-bold'>{name}</h3>
                <p className='inline-block rounded bg-[#312c1d] px-8 py-2 text-sm font-bold text-[#ffc404]'>
                    ${price}
                </p>
                <p className='m-4'>{description}</p>
                <div className='mb-6'>
                    <Button onClick={handleAddToCart}>Add To Cart</Button>
                </div>
            </article>
        </li>
    );
}
