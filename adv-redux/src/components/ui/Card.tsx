import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type CardProps = {
    children: ReactNode;
} & ComponentPropsWithoutRef<'section'>;

export default function Card({ children, className }: CardProps) {
    const classes = twMerge(
        clsx('mx-auto my-4 w-[90%] max-w-[40rem] rounded-lg bg-[#edefe7] p-4', {
            [className as string]: !!className,
        }),
    );

    return <section className={classes}>{children}</section>;
}
