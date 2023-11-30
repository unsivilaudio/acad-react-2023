import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
    children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

type ButtonLinkProps = {
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
            'border-none py-2 px-6 rounded bg-[#ccc9c6] text-[#31302e] hover:text-[#fae1af] duration-200',
            {
                'bg-transparent text-[#ccc9c6] hover:bg-[#31302e]':
                    props.type === 'button',
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
