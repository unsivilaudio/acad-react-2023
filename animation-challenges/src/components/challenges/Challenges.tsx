import { useState } from 'react';

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
                {displayedChallenges.length > 0 && (
                    <ol className='mt-8 flex w-full max-w-[90%] flex-col gap-4'>
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
                    </ol>
                )}
                {displayedChallenges.length === 0 && (
                    <p>No challenges found.</p>
                )}
            </ChallengeTabs>
        </div>
    );
}
