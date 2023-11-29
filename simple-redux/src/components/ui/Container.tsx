import type { ComponentPropsWithoutRef, ReactNode, ElementType } from 'react';

type ContainerProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<T extends ElementType>({
    as,
    className,
    children,
}: ContainerProps<T>) {
    const Wrapper = as || 'div';
    let classes =
        'mx-auto my-20 w-[40rem] rounded-lg bg-[#f4f0fa] p-4 text-center shadow-lg';

    if (className) {
        classes += ' ' + className;
    }
    return <Wrapper className={classes}>{children}</Wrapper>;
}
