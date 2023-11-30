import MainNavigation from '@/layout/MainNavigation';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main className='container mx-auto my-8 p-12 pb-16'>
                <Outlet />
            </main>
        </>
    );
}
