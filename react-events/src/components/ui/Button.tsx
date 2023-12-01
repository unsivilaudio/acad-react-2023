import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
    variant?: 'text';
    children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

type ButtonLinkProps = {
    variant?: 'text';
    children: ReactNode;
    href: string;
} & ComponentPropsWithoutRef<typeof Link>;

function isButtonLink(
    props: ButtonProps | ButtonLinkProps,
): props is ButtonLinkProps {
    return 'href' in props;
}

export default function Button({ ...props }: ButtonLinkProps | ButtonProps) {
    const classes = twMerge(
        clsx(
            'border-none py-2 px-6 rounded bg-[#656360] text-[#f4f3f1] hover:text-[#fbc14d] duration-200 hover:bg-[#7b6e54]',
            {
                'bg-transparent text-[#ccc9c6] hover:text-[#ccc9c6] hover:bg-[#31302e]':
                    props.type === 'button',
            },
            {
                'bg-transparent hover:bg-transparent text-[#f4f3f1] hover:text-[#fbc14d] hover:underline':
                    'href' in props && props.variant === 'text',
            },
            { [props.className as string]: !!props.className },
        ),
    );

    if (isButtonLink(props)) {
        const { href, children, ...linkProps } = props;
        return (
            <Link {...linkProps} className={classes} to={href}>
                {children}
            </Link>
        );
    }

    const { children, ...btnProps } = props;

    return (
        <button {...btnProps} className={classes}>
            {children}
        </button>
    );
}
