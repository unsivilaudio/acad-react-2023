import type { PropsWithChildren } from 'react';

export default function Header({ children }: PropsWithChildren) {
    return (
        <>
            <div id='main-header-loading'></div>
            <header
                id='main-header'
                className='flex items-center justify-between px-[15%] py-8'
            >
                <div id='header-title' className='flex items-center gap-6'>
                    <h1
                        className='text-3xl text-white'
                        style={{ textShadow: '0 2px 8px rgba(0,0,0,0.26)' }}
                    >
                        React Events
                    </h1>
                </div>
                <nav className='flex gap-4'>{children}</nav>
            </header>
        </>
    );
}
