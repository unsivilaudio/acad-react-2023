import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type LabelProps = ComponentPropsWithoutRef<'label'> & {
    htmlFor: string;
    children: ReactNode;
};
type InputProps = ComponentPropsWithoutRef<'input'>;

export default function Input({ type, id, ...props }: InputProps) {
    return (
        <input
            name={id}
            id={id}
            className='w-full rounded-lg border border-[#76c0ae] bg-transparent p-2 text-base text-[#c2e9e0]'
            type={type}
            {...props}
        />
    );
}

function Label({ children, htmlFor }: LabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className='mb-1 block font-display text-[0.5rem] font-bold uppercase'
        >
            {children}
        </label>
    );
}

Input.Label = Label;
