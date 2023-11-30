import { useEffect } from 'react';
import { useNavigate, useFetcher } from 'react-router-dom';

import { Event } from '@/types/event';
import Button from '@/components/ui/Button';
import InputGroup from '@/components/ui/InputGroup';

type EventFormProps = {
    method: 'new' | 'edit';
    event?: Event;
};

function EventForm({ event, method }: EventFormProps) {
    const fetcher = useFetcher();
    const navigate = useNavigate();

    const isSubmitting =
        fetcher.state === 'loading' || fetcher.state === 'submitting';

    useEffect(() => {
        if (fetcher.state === 'idle' && fetcher.data) {
            navigate('/events');
        }
    }, [fetcher, navigate]);

    function cancelHandler() {
        navigate('..');
    }

    return (
        <fetcher.Form className='mx-auto my-8 max-w-[40rem]' method='POST'>
            <div className='space-y-4'>
                <InputGroup
                    label='Title'
                    id='title'
                    defaultValue={
                        method === 'edit' && event?.title ? event.title : ''
                    }
                    required
                />
                <InputGroup
                    label='Image'
                    id='image'
                    type='url'
                    defaultValue={
                        method === 'edit' && event?.image ? event.image : ''
                    }
                    required
                />
                <InputGroup
                    label='Date'
                    id='date'
                    type='date'
                    defaultValue={
                        method === 'edit' && event?.date ? event.date : ''
                    }
                    required
                />
                <InputGroup
                    label='Description'
                    id='description'
                    type='textarea'
                    rows={5}
                    className='resize-none'
                    defaultValue={
                        method === 'edit' && event?.description
                            ? event.description
                            : ''
                    }
                    required
                />
            </div>
            <div className='mt-4 flex justify-end gap-4'>
                <Button
                    type='button'
                    onClick={cancelHandler}
                    disabled={isSubmitting}
                >
                    Cancel
                </Button>
                <Button disabled={isSubmitting}>
                    {isSubmitting
                        ? 'Sending...'
                        : method === 'edit'
                          ? 'Save'
                          : 'Create'}
                </Button>
            </div>
        </fetcher.Form>
    );
}

export default EventForm;
