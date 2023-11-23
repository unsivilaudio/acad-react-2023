import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    variant?: 'text';
    className?: string;
} & ComponentPropsWithoutRef<'button'>;

export default function Button({
    children,
    className,
    variant,
    ...props
}: ButtonProps) {
    const baseClasses = 'text-lg px-5 py-2 font-bold duration-300 rounded-lg';
    let classes =
        'border-none bg-[#337aed] text-[#ecefed] drop-shadow-md hover:bg-[#064dbf]';
    if (variant === 'text') {
        classes =
            'hover:text-[#337aed] text-current border border-transparent hover:border-current';
    }

    classes += ` ${baseClasses}`;
    if (className) classes += ' ' + className;
    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
