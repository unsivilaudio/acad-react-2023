import { type ReactNode } from 'react';
import {
    Link,
    useNavigate,
    useNavigation,
    useParams,
    useSubmit,
} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Event } from '@/types/event.js';
import { fetchEventById } from '@/util/http.js';
import AppError from '@/util/app-error.js';
import Modal from '@/components/ui/Modal';
import EventForm from '@/components/events/EventForm';
import LoadingIndicator from '@/components/ui/LoadingIndicator';
import ErrorBlock from '@/components/ui/ErrorBlock';

export default function EditEvent() {
    const params = useParams();
    const navigate = useNavigate();
    const navigation = useNavigation();
    const submit = useSubmit();

    const { data, isPending, isError, error } = useQuery<Event, AppError>({
        queryKey: ['events', params.id],
        queryFn: ({ signal }) =>
            fetchEventById({ signal, id: params.id as string }),
        staleTime: 10000,
    });

    // const { mutate } = useMutation({
    //     mutationFn: updateEvent,
    //     onMutate: async (data) => {
    //         await queryClient.cancelQueries({
    //             queryKey: ['events', params.id],
    //         });
    //         const previousEvent = queryClient.getQueryData([
    //             'events',
    //             params.id,
    //         ]);

    //         queryClient.setQueryData(['events', params.id], {
    //             ...data.event,
    //             id: data.id,
    //         });

    //         return { previousEvent };
    //     },
    //     onError: (_error, _data, context) => {
    //         queryClient.setQueryData(
    //             ['events', params.id],
    //             context?.previousEvent,
    //         );
    //     },
    //     onSettled: () => {
    //         queryClient.invalidateQueries({ queryKey: ['events', params.id] });
    //     },
    // });

    function handleSubmit(formData: Omit<Event, 'id'>) {
        submit(formData, { method: 'PUT' });
    }

    function handleClose() {
        navigate('../');
    }

    let content: ReactNode;

    if (isPending) {
        content = (
            <div className='text-center'>
                <LoadingIndicator />
            </div>
        );
    }

    if (isError) {
        content = (
            <>
                <ErrorBlock
                    title='Failed to load event'
                    message={
                        error.info?.message ||
                        'Failed to load event, please try again later.'
                    }
                />
                <div className='flex justify-end gap-8'>
                    <Link to='../'>Okay</Link>
                </div>
            </>
        );
    }

    if (data) {
        content = (
            <EventForm inputData={data} onSubmit={handleSubmit}>
                {navigation.state === 'submitting' ? (
                    <span className='text-center'>Sending data...</span>
                ) : (
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
                            Update
                        </button>
                    </>
                )}
            </EventForm>
        );
    }

    return <Modal onClose={handleClose}>{content}</Modal>;
}
