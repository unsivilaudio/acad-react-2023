import TimerChallenge from '@/components/timer-challenge/TimerChallenge.jsx';
import Player from './components/Player.jsx';

function App() {
    return (
        <>
            <Player />
            <div
                id='challenges'
                className='mx-auto my-12 flex max-w-[56rem] flex-wrap gap-12'
            >
                <TimerChallenge title='Easy' targetTime={1} />
                <TimerChallenge title='Not easy' targetTime={5} />
                <TimerChallenge title='Getting Tough' targetTime={10} />
                <TimerChallenge title='Pros only' targetTime={15} />
            </div>
        </>
    );
}

export default App;
