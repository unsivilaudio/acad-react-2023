import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import NewChallenge from '@/components/challenges/NewChallenge';

export default function Header() {
    const [isCreatingNewChallenge, setIsCreatingNewChallenge] =
        useState<boolean>(false);

    function handleStartAddNewChallenge() {
        setIsCreatingNewChallenge(true);
    }

    function handleDone() {
        setIsCreatingNewChallenge(false);
    }

    return (
        <>
            <AnimatePresence>
                {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
            </AnimatePresence>

            <header
                id='main-header'
                className='mx-auto my-8 flex w-[80%] max-w-[40rem] items-center justify-between text-white'
            >
                <h1 className='text-3xl font-bold text-[#84b0fc]'>
                    Your Challenges
                </h1>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                    onClick={handleStartAddNewChallenge}
                    className='rounded border-none bg-[#0f61ef] px-4 py-2 font-semibold text-white shadow-[0_2px_4px_rgba(0,0,0,0.2)] duration-200 hover:bg-[#0944aa]'
                >
                    Add Challenge
                </motion.button>
            </header>
        </>
    );
}
