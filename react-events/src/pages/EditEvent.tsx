import { useRouteLoaderData } from 'react-router-dom';

import type { Event } from '@/types/event';
import EventForm from '@/components/events/EventForm';

export default function EditEventPage() {
    const { event } = useRouteLoaderData('event-detail') as { event: Event };
    return (
        <>
            <EventForm method='edit' event={event} />
        </>
    );
}
