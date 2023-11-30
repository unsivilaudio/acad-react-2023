import MainNavigation from '@/layout/MainNavigation';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main className='container mx-auto my-8 p-8 pb-12'>
                <Outlet />
            </main>
        </>
    );
}
