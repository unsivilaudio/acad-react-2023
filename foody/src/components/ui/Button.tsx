import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    variant?: 'text' | 'text-dark';
    children: ReactNode;
};

export default function Button({
    children,
    variant,
    className,
    ...props
}: ButtonProps) {
    let classes = 'py-2 px-6 rounded duration-200';
    if (variant === 'text') {
        classes +=
            ' bg-transparent border-none text-[#ffc404] hover:text-[#ffab04] active:text-[#ffab04]';
    } else if (variant === 'text-dark') {
        classes +=
            ' bg-transparent border-none text-[#1d1a16] hover:text-[#312c1d] active:text-[#312c1d]';
    } else {
        classes +=
            ' text-[#1f1a09] bg-[#ffc404] border border-[#ffc404] hover:border-[#ffab04] active:border-[#ffab04] hover:bg-[#ffab04] active:bg-[#ffab04] hover:text-[#1f1a09] active:text-[#1f1a09]';
    }

    if (className) {
        classes += ' ' + className;
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
