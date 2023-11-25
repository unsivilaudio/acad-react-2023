import { log } from '../../log.js';

export default function IconButton({ children, icon, ...props }) {
    log('<IconButton /> rendered', 2);

    const Icon = icon;
    return (
        <button
            {...props}
            id='button'
            className='inline-flex items-center gap-2 rounded border-none bg-[#16f3eb] px-4 py-2 text-center text-[#051a19] duration-300 ease-linear'
        >
            <Icon id='button-icon' className='h-[0.9rem] text-[#051a19]' />
            <span id='button-text' className='text-sm'>
                {children}
            </span>
        </button>
    );
}
