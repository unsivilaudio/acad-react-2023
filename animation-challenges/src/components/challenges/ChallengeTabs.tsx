import type { ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

import Badge from '@/components/ui/Badge';
import { Challenge } from '@/types/challenge';

type TabProps = {
    isSelected: boolean;
    onSelect: () => void;
    badgeCaption: number;
    children: ReactNode;
};

function Tab({ isSelected, onSelect, badgeCaption, children }: TabProps) {
    const btnClasses = twMerge(
        clsx(
            'py-2 px-1 text-left rounded-l bg-transparent text-[#b0caf9] border-none flex items-center hover:text-white duration-200',
            { 'text-white': isSelected },
        ),
    );

    return (
        <li>
            <button className={btnClasses} onClick={onSelect}>
                {children}
                <Badge key={badgeCaption} caption={badgeCaption}></Badge>
            </button>
            {isSelected && (
                <motion.div
                    layoutId='tab-indicator'
                    className='rounded-lg border-[1.5px] border-[#0f86ef]'
                />
            )}
        </li>
    );
}

type ChallengeTabProps = {
    selectedType: Challenge['status'];
    onSelectType: (status: Challenge['status']) => void;
    challenges: { [key in Challenge['status']]: Challenge[] };
    children: ReactNode;
};

export default function ChallengeTabs({
    selectedType,
    onSelectType,
    challenges,
    children,
}: ChallengeTabProps) {
    return (
        <>
            <menu id='tabs' className='mb-4 flex gap-4'>
                <Tab
                    isSelected={selectedType === 'active'}
                    onSelect={() => onSelectType('active')}
                    badgeCaption={challenges.active.length}
                >
                    Active
                </Tab>
                <Tab
                    isSelected={selectedType === 'completed'}
                    onSelect={() => onSelectType('completed')}
                    badgeCaption={challenges.completed.length}
                >
                    Completed
                </Tab>
                <Tab
                    isSelected={selectedType === 'failed'}
                    onSelect={() => onSelectType('failed')}
                    badgeCaption={challenges.failed.length}
                >
                    Failed
                </Tab>
            </menu>
            <div>{children}</div>
        </>
    );
}
