import { Challenge } from '@/types/challenge.js';
import { useChallengeCtx } from '../../store/challenges-context.js';

type ChallengeItemProps = {
    challenge: Challenge;
    onViewDetails: () => void;
    isExpanded: boolean;
};

export default function ChallengeItem({
    challenge,
    onViewDetails,
    isExpanded,
}: ChallengeItemProps) {
    const { updateChallengeStatus } = useChallengeCtx();

    const formattedDate = new Date(challenge.deadline).toLocaleDateString(
        'en-US',
        {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        },
    );

    function handleCancel() {
        updateChallengeStatus(challenge.id, 'failed');
    }

    function handleComplete() {
        updateChallengeStatus(challenge.id, 'completed');
    }

    return (
        <li>
            <article className='w-full space-y-4'>
                <header className='flex gap-4'>
                    <img
                        {...challenge.image}
                        className='h-16 w-16 object-contain'
                    />
                    <div className='w-full'>
                        <h2 className='text-2xl font-semibold text-[#b1c1d9] '>
                            {challenge.title}
                        </h2>
                        <p className='font-title text-xs'>
                            Complete until {formattedDate}
                        </p>
                        <p className='font-title flex justify-end gap-4 text-xs'>
                            <button
                                onClick={handleCancel}
                                className='border-none bg-transparent px-2 py-1 text-[#ff7b7b] duration-200 hover:text-[#ff4f4f]'
                            >
                                Mark as failed
                            </button>
                            <button
                                onClick={handleComplete}
                                className='border-none bg-transparent px-2 py-1 text-[#7aaafc] duration-200 hover:text-[#5d7bf2]'
                            >
                                Mark as completed
                            </button>
                        </p>
                    </div>
                </header>
                <div className='challenge-item-details'>
                    <p>
                        <button
                            onClick={onViewDetails}
                            className='border-none bg-transparent text-[#7aaafc]'
                        >
                            View Details{' '}
                            <span className='m-1 inline-block text-sm'>
                                &#9650;
                            </span>
                        </button>
                    </p>

                    {isExpanded && (
                        <div>
                            <p className='challenge-item-description'>
                                {challenge.description}
                            </p>
                        </div>
                    )}
                </div>
            </article>
        </li>
    );
}
