import { type ComponentPropsWithoutRef, ElementType } from 'react';

type InputProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    label?: string;
};

export default function Input<T extends ElementType>({
    as,
    label,
    className,
    id,
    type = 'text',
    ...props
}: InputProps<T>) {
    const Wrapper = as || 'input';
    let classes =
        'w-full rounded-lg border-none bg-[#eaedec] px-5 py-2 text-[#2f2f2f] outline-none duration-300 focus:bg-[#efefef] focus:ring focus:ring-blue-400 focus:ring-offset-2';
    if (className) classes += ' ' + className;
    return (
        <div className='flex flex-col'>
            {label && (
                <label
                    className='mb-2 block font-title text-xs uppercase'
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <Wrapper
                className={classes}
                id={id}
                name={id}
                type={type}
                {...props}
            />
        </div>
    );
}
