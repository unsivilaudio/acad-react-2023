import { Outlet } from 'react-router-dom';
import EventsNavigation from '@/components/events/EventsNavigation';

export default function EventsLayout() {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    );
}
