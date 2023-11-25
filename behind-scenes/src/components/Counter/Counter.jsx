import { useState, memo, useCallback, useMemo } from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';
import CounterHistory from '@/components/Counter/CounterHistory.jsx';

function isPrime(number) {
    log('Calculating if is prime number', 2, 'other');
    if (number <= 1) {
        return false;
    }

    const limit = Math.sqrt(number);

    for (let i = 2; i <= limit; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function uuid() {
    return Math.round(Math.random() * 1e10).toString(16);
}

function Counter({ initialCount }) {
    log('<Counter /> rendered', 1);
    const initialCountIsPrime = useMemo(
        () => isPrime(initialCount),
        [initialCount],
    );

    const [counter, setCounter] = useState([
        { value: initialCount, id: uuid() },
    ]);
    const currentCounter = counter.reduce((a, b) => a + b.value, 0);

    const handleDecrement = useCallback(() => {
        // setCounter((prevCounter) => prevCounter - 1);
        setCounter((prevCounterChanges) => [
            { value: -1, id: uuid() },
            ...prevCounterChanges,
        ]);
    }, []);

    const handleIncrement = useCallback(() => {
        // setCounter((prevCounter) => prevCounter + 1);
        setCounter((prevCounterChanges) => [
            { value: 1, id: uuid() },
            ...prevCounterChanges,
        ]);
    }, []);

    return (
        <section
            id='counter'
            className='my-8 rounded-lg border border-[#05827e] p-8'
        >
            <p
                id='counter-info'
                className='text-center text-sm font-light text-[#9dc5c4]'
            >
                The initial counter value was{' '}
                <strong className='font-bold text-[#edecef]'>
                    {initialCount}
                </strong>
                . It{' '}
                <strong className='font-bold text-[#edecef]'>
                    is {initialCountIsPrime ? 'a' : 'not a'}
                </strong>{' '}
                prime number.
            </p>
            <p className='mx-auto my-4 flex items-center justify-center gap-8 text-2xl'>
                <IconButton icon={MinusIcon} onClick={handleDecrement}>
                    Decrement
                </IconButton>
                <CounterOutput value={currentCounter} />
                <IconButton icon={PlusIcon} onClick={handleIncrement}>
                    Increment
                </IconButton>
            </p>
            <CounterHistory history={counter} />
        </section>
    );
}

export default memo(Counter);
