import { useEffect } from 'react';

import Notification from '@/components/ui/Notification';
import Cart from '@/components/cart/Cart';
import Layout from '@/components/layout/Layout';
import Products from '@/components/shop/Products';
import useCart from '@/store/hooks/use-cart';
import useUI from '@/store/hooks/use-ui';

// https://nextjs-course-fe995-default-rtdb.firebaseio.com/

let isInitial = true;

export default function App() {
    const { notificaton, cartIsVisible } = useUI();
    const { items, totalQuantity, changed, putCart, fetchCart } = useCart();

    useEffect(() => {
        if (isInitial) {
            fetchCart();
            isInitial = false;
            return;
        }

        if (changed) {
            putCart({ items, totalQuantity });
        }
    }, [items, totalQuantity, changed, putCart, fetchCart]);

    return (
        <Layout>
            {notificaton && <Notification {...notificaton} />}
            {cartIsVisible && <Cart />}
            <Products />
        </Layout>
    );
}
