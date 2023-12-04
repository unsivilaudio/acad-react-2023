import { Outlet, Link } from 'react-router-dom';

import Header from '@/layout/Header';
import EventInfo from '@/components/events/EventInfo';
import MainContent from '@/layout/MainContent';

export default function EventDetailsPage() {
    return (
        <>
            <Outlet />
            <Header>
                <Link
                    to='/events'
                    className='rounded bg-transparent p-1 font-bold text-[#b6cad5]'
                >
                    View all Events
                </Link>
            </Header>
            <MainContent>
                <EventInfo />
            </MainContent>
        </>
    );
}
