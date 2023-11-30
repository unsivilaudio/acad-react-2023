import { useRouteLoaderData } from 'react-router-dom';

import type { Event } from '@/types/event';
import EventsList from '@/components/events/EventsList';

export default function EventsPage() {
    const { events } = useRouteLoaderData('events') as { events: Event[] };
    return (
        <>
            <EventsList events={events} />
        </>
    );
}
