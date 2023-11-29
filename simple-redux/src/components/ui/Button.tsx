import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = {
    children?: ReactNode;
    variant?: 'primary' | 'tertiary' | 'text';
} & ComponentPropsWithoutRef<'button'>;

export default function Button({
    children,
    className,
    variant = 'primary',
    ...props
}: ButtonProps) {
    let classes = 'rounded-lg  px-6 py-2 duration-300 ';

    if (variant === 'primary') {
        classes +=
            'text-stone-100 border border-[#3c0080] bg-[#3c0080] hover:border-[#5b14ac] hover:bg-[#5b14ac] active:border-[#5b14ac] active:bg-[#5b14ac] shadow-md';
    } else if (variant === 'tertiary') {
        classes +=
            'text-stone-700 border border-[#ffbb00] bg-[#ffbb00] hover:border-[#ffa600] hover:bg-[#ffa600] active:border-[#ffa600] active:bg-[#ffa600] shadow-md';
    } else if (variant === 'text') {
        classes += 'text-stone-700 hover:text-[#ffa600] active:text-[#ffa600]';
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
