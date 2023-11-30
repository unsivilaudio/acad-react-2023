import NavListItem from '@/components/nav/NavListItem';
import NewsletterSignup from '@/components/newsletter/NewsletterSignup';

export default function MainNavigation() {
    return (
        <header className='mx-auto flex max-w-[60rem] justify-between px-12 py-8'>
            <ul className='flex gap-4'>
                <NavListItem href='/'>Home</NavListItem>
                <NavListItem href='/events' end={false}>
                    Events
                </NavListItem>
                <NavListItem href='/newsletter' end={false}>
                    Newsletter
                </NavListItem>
            </ul>
            <NewsletterSignup />
        </header>
    );
}
