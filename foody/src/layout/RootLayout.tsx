import { type PropsWithChildren } from 'react';
import Header from '@/layout/Header';
import Cart from '@/components/cart/Cart';
import Checkout from '@/components/checkout/Checkout';
import CartContextProvider from '@/context/cart-context';
import MealsContextProvider from '@/context/meals-context';

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <MealsContextProvider>
            <CartContextProvider>
                <Header />
                <Cart />
                <Checkout />
                <main className='container mx-auto'>{children}</main>
            </CartContextProvider>
        </MealsContextProvider>
    );
}
