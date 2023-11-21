import { CORE_CONCEPTS } from './data';
import Header from '@/components/Header';
import CoreConceptList from './components/CoreConceptList';
import Examples from './components/Examples';

function App() {
    return (
        <div>
            <Header />
            <main>
                <CoreConceptList concepts={CORE_CONCEPTS} />
                <Examples />
            </main>
        </div>
    );
}

export default App;
