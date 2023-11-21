import { CORE_CONCEPTS } from '@/data';
import Header from '@/components/Header';
import CoreConcepts from '@/components/concepts/CoreConcepts';
import Examples from '@/components/examples/Examples';
import TabButton from '@/components/examples/TabButton';

function App() {
    return (
        <>
            <Header />
            <main>
                <CoreConcepts concepts={CORE_CONCEPTS} />
                <Examples />
            </main>
        </>
    );
}

export default App;
