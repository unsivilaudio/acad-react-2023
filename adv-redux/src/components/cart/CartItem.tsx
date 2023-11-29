import useCart from '@/store/hooks/use-cart';
import type { CartItem } from '@/store/slices/cart';

type CartItemProps = {
    item: CartItem;
};

export default function CartItem(props: CartItemProps) {
    const { addItemToCart, removeItemFromCart } = useCart();
    const { title, quantity, totalPrice, price } = props.item;

    function handleAddItem() {
        addItemToCart(props.item);
    }

    function handleRemoveItem() {
        removeItemFromCart(props.item.id);
    }

    return (
        <li className='my-4 bg-[#575757] p-4'>
            <header className='flex items-center justify-between'>
                <h3 className='mr-2 text-2xl font-bold'>{title}</h3>
                <div className='text-2xl font-bold'>
                    ${totalPrice.toFixed(2)}{' '}
                    <span className='text-base font-normal italic'>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className='flex items-center justify-between'>
                <div>
                    x <span className='text-2xl font-bold'>{quantity}</span>
                </div>
                <div className='my-2 flex justify-end gap-1'>
                    <button
                        onClick={handleRemoveItem}
                        className='border border-[#eee] bg-transparent px-4 py-1 pb-[7px] text-[#eee] duration-200 hover:bg-[#4b4b4b] hover:text-white'
                    >
                        -
                    </button>
                    <button
                        onClick={handleAddItem}
                        className='border border-[#eee] bg-transparent px-4 py-1 text-[#eee] duration-200 hover:bg-[#4b4b4b] hover:text-white'
                    >
                        +
                    </button>
                </div>
            </div>
        </li>
    );
}
