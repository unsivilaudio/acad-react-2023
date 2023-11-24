import type { PropsWithChildren } from 'react';
import Header from '@/layout/Header';

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <div className='p-8 font-sans text-stone-50'>
            <Header />
            <main>{children}</main>
        </div>
    );
}
