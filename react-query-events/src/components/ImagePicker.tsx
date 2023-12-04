import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { EventSelectableImage } from '@/types/event';

type ImagePickerProps = {
    images: EventSelectableImage[];
    selectedImage?: string;
    onSelect: (imagePath: string) => void;
};

export default function ImagePicker({
    images,
    selectedImage,
    onSelect,
}: ImagePickerProps) {
    return (
        <div id='image-picker'>
            <p className='mb-1 text-sm font-bold uppercase text-[#3c4249]'>
                Select an image
            </p>
            <ul className='flex flex-wrap gap-2 overflow-y-auto'>
                {images.map((image) => (
                    <li
                        key={image.path}
                        onClick={() => onSelect(image.path)}
                        className={twMerge(
                            clsx(
                                'h-12 w-16 cursor-pointer overflow-hidden rounded border-2 border-transparent duration-200',
                                {
                                    'border-[#e30d7c]':
                                        selectedImage === image.path,
                                },
                            ),
                        )}
                    >
                        <img
                            className='h-full w-full object-cover'
                            src={`http://dev.me:8080/${image.path}`}
                            alt={image.caption}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
