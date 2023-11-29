import useCart from '@/store/hooks/use-cart';
import useUI from '@/store/hooks/use-ui';

export default function CartButton() {
    const { toggleCart } = useUI();
    const { totalQuantity } = useCart();

    function handleToggleCart() {
        toggleCart();
    }

    return (
        <button
            className='rounded-lg border border-[#1ad1b9] bg-transparent px-6 py-2 text-[#1ad1b9]'
            onClick={handleToggleCart}
        >
            <span className='mx-2'>My Cart</span>
            <span className='mx-2 rounded-[30px] bg-[#1ad1b9] px-5 py-1 text-[#1d1d1d]'>
                {totalQuantity}
            </span>
        </button>
    );
}
