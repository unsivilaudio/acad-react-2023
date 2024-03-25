import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export default function Card({ children, className }: CardProps) {
    return (
        <div
            className={twMerge(
                'rounded-md p-4 shadow-[0_2px_8px_rgba(0,0,0,0.26)]',
                className,
            )}
        >
            {children}
        </div>
    );
}
