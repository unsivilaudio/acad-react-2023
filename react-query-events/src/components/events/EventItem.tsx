import { Event } from '@/types/event';
import { Link } from 'react-router-dom';

type EventItemProps = {
    event: Event;
};

export default function EventItem({ event }: EventItemProps) {
    const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
    return (
        <article className='my-8 flex h-full w-[20rem] flex-col gap-4 overflow-hidden rounded bg-[#3c4249] pb-4 shadow-[0_2px_8px_rgba(0,0,0,0.26)]'>
            <img
                className='w-full object-cover'
                src={`http://dev.me:8080/${event.image}`}
                alt={event.title}
            />
            <div className='flex h-full flex-col justify-between p-4 text-center'>
                <div>
                    <h2 className='font-title text-lg text-[#d7bfcb]'>
                        {event.title}
                    </h2>
                    <p className='m-2 font-title text-sm'>{formattedDate}</p>
                    <p className='m-2 font-title text-base'>{event.location}</p>
                </div>
                <p>
                    <Link
                        to={`/events/${event.id}`}
                        className='rounded bg-[#e30d7c] px-6 py-2 font-bold text-white shadow-[0_2px_4px_rgba(0,0,0,0.26)] duration-300 hover:bg-[#e30d5b] hover:text-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.26)]'
                    >
                        View Details
                    </Link>
                </p>
            </div>
        </article>
    );
}
