import { type ReactNode, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import type { Event } from '@/types/event';
import { deleteEvent, fetchEventById, queryClient } from '@/util/http';
import AppError from '@/util/app-error';
import ErrorBlock from '@/components/ui/ErrorBlock';
import Modal from '@/components/ui/Modal';

export default function EventInfo() {
    const params = useParams();
    const navigate = useNavigate();

    const [isDeleting, setIsDeleting] = useState(false);

    const { data, isPending, isError, error } = useQuery<Event, AppError>({
        queryKey: ['events', params.id],
        queryFn: ({ signal }) =>
            fetchEventById({ signal, id: params.id as string }),
    });

    const {
        mutate,
        isPending: isPendingDeletion,
        isError: isErrorDeleting,
        error: errorDeleting,
    } = useMutation<Event, AppError, { id: string }>({
        mutationFn: deleteEvent,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['events'],
                refetchType: 'none',
            });
            navigate('/events');
        },
    });

    function handleStartDelete() {
        setIsDeleting(true);
    }

    function handleStopDelete() {
        setIsDeleting(false);
    }

    function handleDelete() {
        mutate({ id: params.id as string });
    }

    let content: ReactNode;

    if (isPending) {
        content = (
            <div className='mx-auto my-8 flex w-[40rem] items-center justify-center overflow-hidden rounded-lg bg-[#343b3f]'>
                <p className='p-6 text-center'>Fetching event data...</p>
            </div>
        );
    }

    if (isError) {
        content = (
            <div className='mx-auto my-8 flex w-[40rem] items-center justify-center overflow-hidden rounded-lg bg-[#343b3f]'>
                <ErrorBlock
                    title='Failed to load event'
                    message={
                        error.info?.message ||
                        'Failed to fetch event data, please try again later.'
                    }
                />
            </div>
        );
    }

    if (data) {
        const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });

        content = (
            <>
                <header className='mx-auto my-2 flex w-[40rem] items-center justify-between'>
                    <h1 className='text-2xl font-bold'>{data.title}</h1>
                    <nav className='flex gap-4'>
                        <button
                            onClick={handleStartDelete}
                            className='rounded p-1 font-bold text-[#b6cad5]'
                        >
                            Delete
                        </button>
                        <Link
                            to='edit'
                            className='rounded p-1 font-bold text-[#b6cad5]'
                        >
                            Edit
                        </Link>
                    </nav>
                </header>
                <div
                    id='event-details-content'
                    className='mx-auto my-8 w-[40rem] overflow-hidden rounded-lg bg-[#343b3f]'
                >
                    <img
                        src={`http://dev.me:8080/${data.image}`}
                        alt={data.title}
                        className='mb-8 h-[20rem] w-full object-cover'
                    />
                    <div
                        id='event-details-info'
                        className='space-y-6 p-12 pt-0'
                    >
                        <div>
                            <p
                                id='event-details-location'
                                className='text-lg font-bold text-[#b6cad5]'
                            >
                                {data.location}
                            </p>
                            <time
                                className='text-2xl font-bold text-[#b6cad5]'
                                dateTime={`Todo-DateT$Todo-Time`}
                            >
                                {formattedDate} @ {data.time}
                            </time>
                        </div>
                        <p
                            id='event-details-description'
                            className='text-lg text-[#b6cad5]'
                            style={{ lineHeight: 1.5 }}
                        >
                            {data.description}
                        </p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            {isDeleting && (
                <Modal onClose={handleStopDelete}>
                    <h2 className='mb-4 font-title text-2xl font-bold'>
                        Are you sure?
                    </h2>
                    <p className='mb-3 italic'>
                        Do you really want to delete this event? This action
                        cannot be undone.
                    </p>
                    <div className='flex items-center justify-end gap-8'>
                        {isPendingDeletion && <p>Deleting, please wait...</p>}
                        {!isPendingDeletion && (
                            <>
                                <button
                                    onClick={handleStopDelete}
                                    className='rounded bg-transparent font-bold text-[#3f0c26] duration-300 hover:text-[#7c184c]'
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className='rounded bg-[#e30d7c] px-6 py-2 font-bold text-white shadow-[0_2px_4px_rgba(0,0,0,0.26)] duration-300 hover:bg-[#e30d5b] hover:shadow-[0_2px_8px_rgba(0,0,0,0.26)]'
                                >
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                    {isErrorDeleting && (
                        <ErrorBlock
                            title='Failed to delete event!'
                            message={
                                errorDeleting.info?.message ||
                                'Failed to delete event, please try again later.'
                            }
                        />
                    )}
                </Modal>
            )}
            <article id='event-details'>{content}</article>
        </>
    );
}
