import Header from '@/layout/Header';
import type { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <main className='max-w-3/4 container mx-auto'>
            <Header />
            {children}
        </main>
    );
}
