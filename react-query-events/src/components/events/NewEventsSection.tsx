import { useQuery } from '@tanstack/react-query';

import { fetchEvents } from '@/util/http';
import LoadingIndicator from '@/components/ui/LoadingIndicator';
import ErrorBlock from '@/components/ui/ErrorBlock';
import EventItem from '@/components/events/EventItem';
import { Event } from '@/types/event';
import AppError from '@/util/app-error';

export default function NewEventsSection() {
    const { data, isPending, isError, error } = useQuery<Event[], AppError>({
        queryKey: ['events', { max: 3 }],
        queryFn: ({ signal, queryKey }) =>
            fetchEvents({ signal, ...(queryKey[1] as object) }),
    });

    let content;

    if (isPending) {
        content = <LoadingIndicator />;
    }

    if (isError) {
        content = (
            <ErrorBlock
                title='An error occurred'
                message={error.info?.message || 'Failed to fetch events'}
            />
        );
    }

    if (data) {
        content = (
            <ul className='grid max-w-[60rem] grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-12'>
                {data.map((event) => (
                    <li key={event.id}>
                        <EventItem event={event} />
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <section className='pb-24' id='new-events-section'>
            <header>
                <h2 className='mx-auto my-8 font-title text-4xl font-semibold text-[#b6cad5]'>
                    Recently added events
                </h2>
            </header>
            {content}
        </section>
    );
}
