import { Outlet } from 'react-router-dom';

import configureProductsStore from '@/store/custom/products-store';
import Navigation from '@/components/nav/Navigation';

configureProductsStore();

export default function RootLayout() {
    return (
        <>
            <Navigation />
            <main className='container mx-auto mb-20 mt-10 max-w-[768px]'>
                <Outlet />
            </main>
        </>
    );
}
