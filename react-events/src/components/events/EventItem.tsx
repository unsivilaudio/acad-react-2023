import { useRouteLoaderData, useSubmit } from 'react-router-dom';

import type { Event } from '@/types/event';
import Button from '@/components/ui/Button';

type EventItemProps = {
    event: Event;
};

function EventItem({ event }: EventItemProps) {
    const token = useRouteLoaderData('root') as string | undefined;
    const submit = useSubmit();

    function startDeleteHandler() {
        submit(null, {
            method: 'DELETE',
            action: `/events/${event.id}/delete`,
        });
    }

    return (
        <article className='mx-auto my-8 max-w-[50rem] space-y-4 text-center'>
            <img
                className='mx-auto w-[30rem] rounded'
                src={event.image}
                alt={event.title}
            />
            <h1 className='text-4xl font-semibold capitalize'>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
            {token && (
                <menu className='flex items-center justify-center gap-4'>
                    <Button
                        href='edit'
                        type='button'
                        className='bg-tranparent px-4 py-1'
                    >
                        Edit
                    </Button>
                    <Button
                        type='button'
                        className='bg-transparent px-4 py-1'
                        onClick={startDeleteHandler}
                    >
                        Delete
                    </Button>
                </menu>
            )}
        </article>
    );
}

export default EventItem;
