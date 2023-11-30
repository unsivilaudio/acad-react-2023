import { Link } from 'react-router-dom';
import { Event } from '@/types/event';

type EventListProps = {
    events: Event[];
};

function EventsList({ events }: EventListProps) {
    return (
        <div className='mx-auto my-8 max-w-[40rem]'>
            <h1 className='mb-3 text-3xl font-semibold'>All Events</h1>
            <ul className='flex flex-col gap-4'>
                {events.map((event) => (
                    <li
                        key={event.id}
                        className='w-full hover:[&>a]:scale-105 hover:[&>a]:bg-[#4b4a47]'
                    >
                        <Link
                            to={`/events/${event.id}`}
                            className='flex overflow-hidden rounded bg-[#31302e] duration-300'
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                                className='w-[33%] object-cover'
                            />
                            <div className='p-4'>
                                <h2 className='mb-4 text-2xl font-bold'>
                                    {event.title}
                                </h2>
                                <time>{event.date}</time>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventsList;
