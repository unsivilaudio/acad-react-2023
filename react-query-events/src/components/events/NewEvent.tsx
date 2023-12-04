import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { queryClient, createNewEvent, type CreateEventArgs } from '@/util/http';
import AppError from '@/util/app-error';
import { Event } from '@/types/event';
import Modal from '@/components/ui/Modal';
import EventForm from '@/components/events/EventForm';
import ErrorBlock from '@/components/ui/ErrorBlock';

export default function NewEvent() {
    const navigate = useNavigate();

    const { mutate, isPending, isError, error } = useMutation<
        Event,
        AppError,
        CreateEventArgs
    >({
        mutationFn: createNewEvent,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['events'],
            });
            navigate('/events');
        },
    });

    function handleSubmit(eventData: Omit<Event, 'id'>) {
        mutate({ event: eventData });
    }

    return (
        <Modal onClose={() => navigate('../')}>
            <EventForm onSubmit={handleSubmit}>
                {isPending && 'Submitting...'}
                {!isPending && (
                    <>
                        <Link
                            to='../'
                            className='rounded bg-transparent font-bold text-[#3f0c26] duration-300 hover:text-[#7c184c]'
                        >
                            Cancel
                        </Link>
                        <button
                            type='submit'
                            className='rounded bg-[#e30d7c] px-6 py-2 font-bold text-white shadow-[0_2px_4px_rgba(0,0,0,0.26)] duration-300 hover:bg-[#e30d5b] hover:shadow-[0_2px_8px_rgba(0,0,0,0.26)]'
                        >
                            Create
                        </button>
                    </>
                )}
            </EventForm>
            {isError && (
                <ErrorBlock
                    title='Failed to create event'
                    message={
                        error.info?.message ||
                        'Failed to create event, please check your inputs and try again later.'
                    }
                />
            )}
        </Modal>
    );
}
