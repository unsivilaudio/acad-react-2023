import Cart from '@/components/cart/Cart';
import Layout from '@/components/layout/Layout';
import Products from '@/components/shop/Products';

export default function App() {
    return (
        <Layout>
            <Cart />
            <Products />
        </Layout>
    );
}
