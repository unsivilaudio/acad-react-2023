import { useState, useEffect } from 'react';

type QuestionTimerProps = {
    timeout: number;
    onTimeout?(): void;
    mode: '' | 'answered' | 'correct' | 'wrong';
};

export default function QuestionTimer({
    timeout,
    onTimeout,
    mode,
}: QuestionTimerProps) {
    const [remainingTime, setRemainingTime] = useState<number>(timeout);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (onTimeout) {
            timer = setTimeout(onTimeout, timeout);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    let progressClasses =
        'h-2 w-1/2 rounded-[24px] progress-bar-[#6a558a] duration-100';
    if (mode === 'answered') {
        progressClasses += ' progress-value-[#f8e59c]';
    } else {
        progressClasses += ' progress-value-[#9e5ef8]';
    }

    return (
        <progress
            className={progressClasses}
            max={timeout}
            value={remainingTime}
        />
    );
}
