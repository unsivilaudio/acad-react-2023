import ResultModal from '@/components/modal/ResultModal';
import TimerButton from '@/components/timer-challenge/TimerButton';
import { useRef, useState } from 'react';

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef(null);
    const dialog = useRef(null);

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive =
        timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((ps) => ps - 10);
        }, 10);
    }

    function handleStop() {
        if (timer.current) {
            clearInterval(timer.current);
            timer.current = null;
        }
        dialog.current.open();
    }

    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            <section className='mx-auto mt-4 flex w-[22rem] flex-col items-center justify-center rounded-lg bg-gradient-to-br from-[#4df8df] to-[#4df0f8] p-8 text-[#221c18] shadow-[0_2px_8px_rgba(35,34,34,0.6)]'>
                <h2 className='text-center text-2xl font-semibold uppercase tracking-widest text-[#221c18]'>
                    {title}
                </h2>
                <p className='m-2 rounded border border-[#46cebe] px-2 py-1'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <TimerButton
                        onClick={!timerIsActive ? handleStart : handleStop}
                        isActive={timerIsActive}
                    >
                        {!timerIsActive ? 'Start' : 'Stop'} Challenge
                    </TimerButton>
                </p>
                <p className='mt-2'>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}
