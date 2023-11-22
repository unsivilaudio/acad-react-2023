export default function Button({ children, variant, ...props }) {
    if (variant === 'text') {
        return (
            <button
                type='button'
                className='border-none text-[#f0b322] duration-300 ease-in-out hover:text-[#f0920e]'
                {...props}
            >
                {children}
            </button>
        );
    }

    return (
        <button
            className='rounded border-none bg-[#f0b322] px-8 py-4 font-semibold uppercase text-[#1f2937] duration-300 ease-in-out hover:bg-[#f0920e]'
            {...props}
        >
            {children}
        </button>
    );
}
