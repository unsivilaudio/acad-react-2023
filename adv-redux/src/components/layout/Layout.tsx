import { Fragment, type PropsWithChildren } from 'react';
import MainHeader from '@/components/layout/MainHeader';

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
    return (
        <Fragment>
            <MainHeader />
            <main>{children}</main>
        </Fragment>
    );
}
