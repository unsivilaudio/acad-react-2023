import type { ReactNode, ElementType } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

type NavLinkProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
    href: string;
};

export default function NavListItem<T extends ElementType>({
    as,
    href,
    children,
}: NavLinkProps<T>) {
    const Wrapper = as || 'li';
    return (
        <Wrapper className='text-[#fbd997]'>
            <NavLink
                className={({ isActive }) =>
                    clsx('duration-200 hover:text-[#fab833]', {
                        'text-[#fab833] underline hover:text-[#fab833]':
                            isActive === true,
                    })
                }
                to={href}
                end
            >
                {children}
            </NavLink>
        </Wrapper>
    );
}
