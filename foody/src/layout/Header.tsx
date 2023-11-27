import headerLogo from '@/assets/logo.jpg';
import { useCartCtx } from '@/context/cart-context';

export default function Header() {
    const { openCart, cart } = useCartCtx();
    const totalItems = cart.items.reduce((a, b) => a + b.quantity, 0);

    return (
        <header className='flex items-center justify-between px-[10%] py-12'>
            <div className='flex items-center gap-4'>
                <img
                    className='h-16 w-16 rounded-full border-2 border-[#ffc404] object-contain'
                    src={headerLogo}
                    alt='cups-n-saucers'
                />
                <h1 className='font-title text-4xl font-bold uppercase tracking-[0.2rem] text-[#ffc404]'>
                    Foody
                </h1>
            </div>
            <button className='font-title text-2xl' onClick={openCart}>
                Cart ({totalItems})
            </button>
        </header>
    );
}
