import { useRef, useState, type SyntheticEvent } from 'react';
import { useQuery } from '@tanstack/react-query';

import AppError from '@/util/app-error';
import { fetchEvents } from '@/util/http';
import { Event } from '@/types/event';
import ErrorBlock from '@/components/ui/ErrorBlock';
import LoadingIndicator from '@/components/ui/LoadingIndicator';
import EventItem from '@/components/events/EventItem';

export default function FindEventSection() {
    const searchElement = useRef<HTMLInputElement>(null);
    const [searchTerm, setSearchTerm] = useState<string | undefined>();

    const { data, isLoading, isError, error } = useQuery<Event[], AppError>({
        queryKey: ['events', { search: searchTerm }],
        queryFn: ({ signal }) => fetchEvents({ signal, searchTerm }),
        enabled: searchTerm !== undefined,
    });

    function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        setSearchTerm(searchElement.current?.value);
    }

    let content = (
        <p className='my-2'>Please enter a search term and to find events.</p>
    );

    if (isLoading) {
        content = <LoadingIndicator />;
    }

    if (isError) {
        content = (
            <ErrorBlock
                title='Something went wrong.'
                message={error.info?.message || 'Could not fetch events.'}
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
        <section className='pb-24' id='all-events-section'>
            <header>
                <h2 className='mx-auto my-8 font-title text-3xl font-bold text-[#b6cad5]'>
                    Find your next event!
                </h2>
                <form onSubmit={handleSubmit} id='search-form'>
                    <input
                        className='rounded-l bg-[#fff] px-4 py-2 text-[#39393a]'
                        type='search'
                        placeholder='Search events'
                        ref={searchElement}
                    />
                    <button className='rounded-r bg-[#b6cad5] px-4 py-2 font-bold text-[#1d161a]'>
                        Search
                    </button>
                </form>
            </header>
            {content}
        </section>
    );
}
