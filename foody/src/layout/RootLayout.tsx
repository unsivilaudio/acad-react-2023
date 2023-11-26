import { useState } from 'react';
import Header from '@/layout/Header';
import { type PropsWithChildren } from 'react';
import Cart from '@/components/cart/Cart';

export default function RootLayout({ children }: PropsWithChildren) {
    const [showCart, setShowCart] = useState(false);

    function onToggleCart(show?: boolean) {
        setShowCart((ps) => show ?? !ps);
    }

    return (
        <div>
            <Header onShowCart={onToggleCart} />
            <Cart open={showCart} toggleShowCart={onToggleCart} />
            <main className='container mx-auto'>{children}</main>
        </div>
    );
}
