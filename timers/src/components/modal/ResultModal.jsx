import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

function ResultModal({ targetTime, remainingTime, onReset }, ref) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog
            ref={dialog}
            id='result-modal'
            onClose={onReset}
            className='animate-slide-ft mx-auto mt-[15%] rounded-lg border-none bg-[#d7fcf8] p-8'
        >
            <h2 className='mb-1 font-title text-5xl font-bold uppercase'>
                {userLost ? 'You lost!' : `Your Score: ${score}`}
            </h2>

            <p className='my-2 text-lg'>
                The target time was{' '}
                <strong className='text-[#10655b]'>{targetTime}</strong>{' '}
                seconds.
            </p>
            <p className='my-2 text-lg'>
                You stopped the timer with{' '}
                <strong className='text-[#10655b]'>
                    {formattedRemainingTime} seconds left.
                </strong>
            </p>
            <form method='dialog' className='text-right' onSubmit={onReset}>
                <button className='mt-4 rounded bg-[#12352f] px-4 py-2 text-lg text-[#edfcfa] duration-300 hover:bg-[#051715]'>
                    Close
                </button>
            </form>
        </dialog>,
        document.getElementById('modal'),
    );
}

export default forwardRef(ResultModal);
