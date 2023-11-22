import type { PropsWithChildren } from 'react';

export default function Card({ children }: PropsWithChildren) {
    return (
        <div className='mx-auto my-8 max-w-[30rem] rounded bg-gradient-to-t from-[#307e6c] to-[#2b996d] px-12 py-8'>
            {children}
        </div>
    );
}
