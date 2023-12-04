import { useState, type ReactNode, type SyntheticEvent } from 'react';

import ImagePicker from '../ImagePicker.js';
import { Event } from '@/types/event.js';
import InputGroup from '@/components/ui/InputGroup.js';

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
            <ImagePicker
                images={[]}
                onSelect={handleSelectImage}
                selectedImage={selectedImage}
            />
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
