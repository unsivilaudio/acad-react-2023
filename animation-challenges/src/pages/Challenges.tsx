import Header from '@/components/challenges/Header';
import Challenges from '@/components/challenges/Challenges';
import ChallengesContextProvider from '@/store/challenges-context';

export default function ChallengesPage() {
    return (
        <ChallengesContextProvider>
            <Header />
            <main className='mx-auto my-4 w-[80%] max-w-[40rem]'>
                <Challenges />
            </main>
        </ChallengesContextProvider>
    );
}
