import { useRouteLoaderData } from 'react-router-dom';

import { Event } from '@/types/event';
import EventItem from '@/components/events/EventItem';

export default function EventDetailPage() {
    const { event } = useRouteLoaderData('event-detail') as { event: Event };

    return <EventItem event={event} />;
}
