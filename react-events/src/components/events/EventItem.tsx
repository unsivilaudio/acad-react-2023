import Button from '@/components/ui/Button';
import type { Event } from '@/types/event';

type EventItemProps = {
    event: Event;
};

function EventItem({ event }: EventItemProps) {
    function startDeleteHandler() {
        // ...
    }

    return (
        <article className='mx-auto my-8 max-w-[50rem] space-y-4 text-center'>
            <img
                className='mx-auto w-[30rem] rounded'
                src={event.image}
                alt={event.title}
            />
            <h1 className='text-4xl font-semibold'>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
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
        </article>
    );
}

export default EventItem;
