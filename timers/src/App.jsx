import Player from './components/Player.jsx';

function App() {
    return (
        <>
            <Player />
            <div
                id='challenges'
                className='mx-auto my-12 flex max-w-[50rem] flex-wrap gap-12'
            ></div>
        </>
    );
}

export default App;
