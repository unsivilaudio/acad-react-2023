import type { ComponentPropsWithoutRef } from 'react';

type InputProps = {
    name: string;
    label?: string;
    type?: string;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({
    className,
    name,
    label,
    type = 'text',
    ...props
}: InputProps) {
    return (
        <p className={className ?? 'flex flex-col'}>
            {label && (
                <label className='mb-2 text-sm font-bold' htmlFor={name}>
                    {label}
                </label>
            )}
            <input
                className='w-full max-w-[20rem] rounded border border-[#ccc] px-4 py-2 text-inherit outline-none duration-300 focus:ring focus:ring-[#929edd] focus:ring-offset-2 focus:ring-offset-transparent'
                id={name}
                name={name}
                type={type}
                {...props}
            />
        </p>
    );
}
