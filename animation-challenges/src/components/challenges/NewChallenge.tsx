import { useRef, useState, type SyntheticEvent } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { useChallengeCtx } from '@/store/challenges-context';
import images from '@/assets/images';
import Modal from '@/components/ui/Modal';
import InputGroup from '@/components/ui/InputGroup';

type SelectedImage = {
    src: string;
    alt: string;
};

type NewChallengeProps = {
    onDone: () => void;
};

export default function NewChallenge({ onDone }: NewChallengeProps) {
    const title = useRef<HTMLInputElement | null>(null);
    const description = useRef<HTMLInputElement>(null);
    const deadline = useRef<HTMLInputElement | null>(null);

    const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
        null,
    );

    const { addChallenge } = useChallengeCtx();

    function handleSelectImage(image: SelectedImage) {
        setSelectedImage(image);
    }

    function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        if (
            !selectedImage ||
            !title.current ||
            !description.current ||
            !deadline.current
        )
            return;
        const challenge = {
            title: title.current.value,
            description: description.current.value,
            deadline: deadline.current.value,
            image: selectedImage,
        };

        if (
            !challenge.title.trim() ||
            !challenge.description.trim() ||
            !challenge.deadline.trim() ||
            !challenge.image
        ) {
            return;
        }

        onDone();
        addChallenge(challenge);
    }

    return (
        <Modal title='New Challenge' onClose={onDone}>
            <form
                id='new-challenge'
                onSubmit={handleSubmit}
                className='w-[85vw] max-w-[30rem] space-y-6 pt-8'
            >
                <InputGroup label='Title' id='title' ref={title} />
                <InputGroup
                    label='Description'
                    id='description'
                    type='textarea'
                    ref={description}
                />
                <InputGroup
                    label='Deadline'
                    type='date'
                    id='deadline'
                    ref={deadline}
                />
                <ul
                    id='new-challenge-images'
                    className='grid grid-cols-[repeat(auto-fill,3rem)] gap-2'
                >
                    {images.map((image: SelectedImage) => (
                        <li
                            key={image.alt}
                            onClick={() => handleSelectImage(image)}
                            className={twMerge(
                                clsx(
                                    'h-12 w-12 rounded-full border-2 border-transparent duration-200',
                                    {
                                        'border-[#0f61ef]':
                                            selectedImage === image,
                                    },
                                ),
                            )}
                        >
                            <img
                                {...image}
                                className='h-full w-full object-contain'
                            />
                        </li>
                    ))}
                </ul>

                <p className='mt-4 flex justify-end gap-4'>
                    <button
                        type='button'
                        onClick={onDone}
                        className='bg-transparent px-4 py-2 text-[#314a77] duration-200 hover:bg-transparent hover:text-[#0f3cef]'
                    >
                        Cancel
                    </button>
                    <button className='rounded bg-[#0f61ef] px-6 py-2 font-semibold text-white shadow-md duration-200 hover:bg-[#0f86ef]'>
                        Add Challenge
                    </button>
                </p>
            </form>
        </Modal>
    );
}
