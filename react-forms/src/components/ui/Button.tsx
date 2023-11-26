import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    variant?: 'flat';
    children: ReactNode;
};

export default function Button({
    children,
    variant,
    type = 'button',
    ...props
}: ButtonProps) {
    let classes = 'py-2 px-4 text-base rounded border-none duration-200';

    if (variant === 'flat') {
        classes +=
            ' bg-transparent text-[#9cbaba] hover:bg-transparent hover:text-[#869999] focus:text-[#869999]';
    } else {
        classes +=
            ' bg-[#147b73] text-[#d9e2f1] hover:bg-[#319890] focus:bg-[#319890]';
    }

    return (
        <button className={classes} type={type} {...props}>
            {children}
        </button>
    );
}
