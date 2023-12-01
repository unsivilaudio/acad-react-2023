import NavListItem from '@/components/nav/NavListItem';
import NewsletterSignup from '@/components/newsletter/NewsletterSignup';
import Button from '@/components/ui/Button';
import { useRouteLoaderData } from 'react-router-dom';

export default function MainNavigation() {
    const token = useRouteLoaderData('root') as string | undefined;

    return (
        <header className='mx-auto flex max-w-[60rem] justify-between px-12 py-8'>
            <ul className='flex items-center gap-4'>
                <NavListItem href='/'>Home</NavListItem>
                <NavListItem href='/events' end={false}>
                    Events
                </NavListItem>
                <NavListItem href='/newsletter'>Newsletter</NavListItem>
                {!token && (
                    <NavListItem href='/auth'>Authentication</NavListItem>
                )}
                {token && (
                    <li className='text-sm'>
                        <Button href='/logout' className='px-2 py-1'>
                            Logout
                        </Button>
                    </li>
                )}
            </ul>
            <NewsletterSignup />
        </header>
    );
}
