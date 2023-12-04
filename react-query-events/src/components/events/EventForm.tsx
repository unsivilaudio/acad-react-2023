import { useState, type ReactNode, type SyntheticEvent } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchSelectableImages } from '@/util/http';
import { Event, EventSelectableImage } from '@/types/event.js';
import InputGroup from '@/components/ui/InputGroup';
import ImagePicker from '@/components/ImagePicker';
import AppError from '@/util/app-error';
import ErrorBlock from '@/components/ui/ErrorBlock';

type EventFormProps = {
    inputData?: Omit<Event, 'id'>;
    onSubmit: (eventDetails: Omit<Event, 'id'>) => void;
    children: ReactNode;
};

export default function EventForm({
    inputData,
    onSubmit,
    children,
}: EventFormProps) {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(
        inputData?.image,
    );

    const { data, isPending, isError } = useQuery<
        EventSelectableImage[],
        AppError
    >({
        queryKey: ['events', 'selectable-images'],
        queryFn: fetchSelectableImages,
    });

    function handleSelectImage(image?: string) {
        if (!image) return;
        setSelectedImage(image);
    }

    function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData) as Omit<
            Event,
            'id' | 'image'
        >;
        if (!selectedImage) return;

        onSubmit({ ...data, image: selectedImage });
    }

    return (
        <form id='event-form' className='space-y-4' onSubmit={handleSubmit}>
            <InputGroup
                id='title'
                label='Title'
                defaultValue={inputData?.title ?? ''}
            />
            {isPending && <p>Loading selectable images...</p>}
            {isError && (
                <ErrorBlock
                    title='Failed to load selectable images'
                    message='Please try again later.'
                />
            )}
            {data && (
                <ImagePicker
                    images={data}
                    onSelect={handleSelectImage}
                    selectedImage={selectedImage}
                />
            )}
            <InputGroup
                id='description'
                label='Description'
                defaultValue={inputData?.description ?? ''}
            />
            <div className='flex gap-4 [&>*]:basis-1/2'>
                <InputGroup
                    type='date'
                    id='date'
                    label='Date'
                    defaultValue={inputData?.date ?? ''}
                />
                <InputGroup
                    type='time'
                    id='time'
                    label='Time'
                    defaultValue={inputData?.time ?? ''}
                />
            </div>

            <InputGroup
                id='location'
                label='Location'
                defaultValue={inputData?.location ?? ''}
            />
            <p className='flex items-center justify-end gap-8'>{children}</p>
        </form>
    );
}
