import clsx from 'clsx';

type ImagePickerProps = {
    images: { path: string; caption: string }[];
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
                        className={clsx(
                            'h-12 w-16 overflow-hidden rounded border-2 border-transparent',
                            {
                                'border-[#e30d7c]':
                                    selectedImage === image.path,
                            },
                        )}
                    >
                        <img
                            className='mx-auto my-8 flex w-[40rem] items-center justify-between'
                            src={`http://dev.me:8080/${image.path}`}
                            alt={image.caption}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
