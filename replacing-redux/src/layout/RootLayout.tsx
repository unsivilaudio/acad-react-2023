import { Outlet } from 'react-router-dom';

import ProductsContextProvider from '@/store/context/products-context';
import Navigation from '@/components/nav/Navigation';

export default function RootLayout() {
    return (
        <>
            <ProductsContextProvider>
                <Navigation />
                <main className='container mx-auto mb-20 mt-10 max-w-[768px]'>
                    <Outlet />
                </main>
            </ProductsContextProvider>
        </>
    );
}
