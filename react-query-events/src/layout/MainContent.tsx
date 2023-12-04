import type { PropsWithChildren } from 'react';

export default function MainContent({ children }: PropsWithChildren) {
    return <main className='mx-auto w-[90%] max-w-[48rem]'>{children}</main>;
}
