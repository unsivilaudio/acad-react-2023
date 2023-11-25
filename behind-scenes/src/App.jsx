import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';

function App() {
    log('<App /> rendered');

    const [enteredNumber, setEnteredNumber] = useState(0);
    const [chosenCount, setChosenCount] = useState(0);

    function handleChange(event) {
        setEnteredNumber(+event.target.value);
    }

    function handleSetClick() {
        setChosenCount(enteredNumber);
        setEnteredNumber(0);
    }

    return (
        <>
            <Header />
            <main className='mx-auto my-8 w-[90%] max-w-[50rem]'>
                <section
                    id='configure-counter'
                    className='mx-auto flex items-center justify-center gap-2 rounded-lg text-center'
                >
                    <h2 className='m-2 font-bold text-[#88dbd6]'>
                        Set Counter
                    </h2>
                    <input
                        className='m-2 w-16 rounded border border-[#88dbd6] bg-[#0e1a1c] px-1 py-2 text-center text-[#88dbd6]'
                        type='number'
                        onChange={handleChange}
                        value={enteredNumber}
                    />
                    <button
                        className='border-none bg-transparent text-[#96d8d6] duration-200 hover:text-[#16f3eb]'
                        onClick={handleSetClick}
                    >
                        Set
                    </button>
                </section>
                <Counter initialCount={chosenCount} />
            </main>
        </>
    );
}

export default App;
