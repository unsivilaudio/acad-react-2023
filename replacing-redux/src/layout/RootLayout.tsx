import { Outlet } from 'react-router-dom';
import Navigation from '@/components/nav/Navigation';

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
