import { useState } from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';

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

export default function Counter({ initialCount }) {
    log('<Counter /> rendered', 1);
    const initialCountIsPrime = isPrime(initialCount);

    const [counter, setCounter] = useState(initialCount);

    function handleDecrement() {
        setCounter((prevCounter) => prevCounter - 1);
    }

    function handleIncrement() {
        setCounter((prevCounter) => prevCounter + 1);
    }

    return (
        <section
            id='counter'
            className='my-8 rounded-lg border border-[#05827e] p-8'
        >
            <p id='counter-info' className='text-center text-sm'>
                The initial counter value was <strong>{initialCount}</strong>.
                It <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong>{' '}
                prime number.
            </p>
            <p className='mx-auto my-4 flex items-center justify-center gap-8 text-2xl'>
                <IconButton icon={MinusIcon} onClick={handleDecrement}>
                    Decrement
                </IconButton>
                <CounterOutput value={counter} />
                <IconButton icon={PlusIcon} onClick={handleIncrement}>
                    Increment
                </IconButton>
            </p>
        </section>
    );
}
