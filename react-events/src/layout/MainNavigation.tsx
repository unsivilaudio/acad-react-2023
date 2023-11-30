import NavListItem from '@/components/nav/NavListItem';

export default function MainNavigation() {
    return (
        <header className='mx-auto flex max-w-[60rem] justify-center p-8'>
            <ul className='flex gap-4'>
                <NavListItem href='/'>Home</NavListItem>
                <NavListItem href='/events' end={false}>
                    Events
                </NavListItem>
            </ul>
        </header>
    );
}
