import {
    createContext,
    useState,
    type PropsWithChildren,
    useContext,
} from 'react';
import type { Challenge } from '@/types/challenge';

type ChallengeContextValue = {
    challenges: Challenge[];
    addChallenge(challenge: Omit<Challenge, 'id' | 'status'>): void;
    updateChallengeStatus(id: string, status: Challenge['status']): void;
};

const ChallengesContext = createContext<ChallengeContextValue | null>(null);

export const useChallengeCtx = () => {
    const ctx = useContext(ChallengesContext);

    if (!ctx) {
        throw new Error(
            'You must use this hook in the context of the provider.',
        );
    }

    return ctx;
};

export default function ChallengesContextProvider({
    children,
}: PropsWithChildren) {
    const [challenges, setChallenges] = useState<Challenge[]>([]);

    function addChallenge(challenge: Challenge) {
        setChallenges((prevChallenges) => [
            { ...challenge, id: Math.random().toString(), status: 'active' },
            ...prevChallenges,
        ]);
    }

    function deleteChallenge(challengeId: string) {
        setChallenges((prevChallenges) =>
            prevChallenges.filter((challenge) => challenge.id !== challengeId),
        );
    }

    function updateChallengeStatus(
        challengeId: string,
        newStatus: Challenge['status'],
    ) {
        setChallenges((prevChallenges) =>
            prevChallenges.map((challenge) => {
                if (challenge.id === challengeId) {
                    return { ...challenge, status: newStatus };
                }
                return challenge;
            }),
        );
    }

    const challengesContext = {
        challenges,
        addChallenge,
        deleteChallenge,
        updateChallengeStatus,
    };

    return (
        <ChallengesContext.Provider value={challengesContext}>
            {children}
        </ChallengesContext.Provider>
    );
}
