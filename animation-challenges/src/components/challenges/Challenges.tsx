import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Challenge } from '@/types/challenge';
import { useChallengeCtx } from '@/store/challenges-context';
import ChallengeItem from '@/components/challenges/ChallengeItem';
import ChallengeTabs from '@/components/challenges/ChallengeTabs';

export default function Challenges() {
    const { challenges } = useChallengeCtx();
    const [selectedType, setSelectedType] =
        useState<Challenge['status']>('active');
    const [expanded, setExpanded] = useState<null | string>(null);

    function handleSelectType(newType: Challenge['status']) {
        setSelectedType(newType);
    }

    function handleViewDetails(id: string) {
        setExpanded((prevId) => {
            if (prevId === id) {
                return null;
            }

            return id;
        });
    }

    const filteredChallenges = {
        active: challenges.filter((challenge) => challenge.status === 'active'),
        completed: challenges.filter(
            (challenge) => challenge.status === 'completed',
        ),
        failed: challenges.filter((challenge) => challenge.status === 'failed'),
    };

    const displayedChallenges = filteredChallenges[selectedType];

    return (
        <div id='challenges' className='rounded-md bg-[#22323a] p-6 pb-8'>
            <ChallengeTabs
                challenges={filteredChallenges}
                onSelectType={handleSelectType}
                selectedType={selectedType}
            >
                <AnimatePresence mode='wait'>
                    {displayedChallenges.length > 0 && (
                        <motion.ol
                            key='challenge-items'
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='mt-8 flex w-full max-w-[90%] flex-col gap-4'
                            exit={{ y: -30, opacity: 0 }}
                        >
                            <AnimatePresence>
                                {displayedChallenges.map((challenge) => (
                                    <ChallengeItem
                                        key={challenge.id}
                                        challenge={challenge}
                                        onViewDetails={() =>
                                            handleViewDetails(challenge.id)
                                        }
                                        isExpanded={expanded === challenge.id}
                                    />
                                ))}
                            </AnimatePresence>
                        </motion.ol>
                    )}
                    {displayedChallenges.length === 0 && (
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className='challenge-fallback'
                        >
                            No challenges found.
                        </motion.p>
                    )}
                </AnimatePresence>
            </ChallengeTabs>
        </div>
    );
}
