import { Link, Outlet } from 'react-router-dom';

import MainContent from '@/layout/MainContent';
import Header from '@/layout/Header';
import EventsIntroSection from '@/components/events/EventsIntroSection';
import FindEventSection from '@/components/events/FindEventSection';
import NewEventsSection from '@/components/events/NewEventsSection';

export default function Events() {
    return (
        <>
            <Outlet />
            <Header>
                <Link
                    to='/events/new'
                    className='rounded bg-[#e30d7c] px-6 py-2 font-bold text-white shadow-[0_2px_4px_rgba(0,0,0,0.26)] duration-300 hover:bg-[#e30d5b] hover:shadow-[0_2px_8px_rgba(0,0,0,0.26)]'
                >
                    New Event
                </Link>
            </Header>
            <EventsIntroSection />
            <MainContent>
                <NewEventsSection />
                <FindEventSection />
            </MainContent>
        </>
    );
}
