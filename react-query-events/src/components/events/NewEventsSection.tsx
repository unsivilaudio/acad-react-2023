import { useEffect, useState } from 'react';

import AppError from '@/types/app-error';
import type { Event } from '@/types/event';
import LoadingIndicator from '@/components/ui/LoadingIndicator';
import ErrorBlock from '@/components/ui/ErrorBlock';
import EventItem from '@/components/events/EventItem';

export default function NewEventsSection() {
    const [data, setData] = useState<Event[]>();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchEvents() {
            setIsLoading(true);
            const response = await fetch('http://dev.me:8080/events');

            if (!response.ok) {
                const error = new AppError(
                    'An error occurred while fetching the events',
                );
                error.code = response.status;
                error.info = await response.json();
                throw error;
            }

            const { events } = await response.json();

            return events;
        }

        fetchEvents()
            .then((events) => {
                setData(events);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    let content;

    if (isLoading) {
        content = <LoadingIndicator />;
    }

    if (error) {
        content = (
            <ErrorBlock
                title='An error occurred'
                message='Failed to fetch events'
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
