import { Header } from './components/Header.tsx';
import { Opinions } from './components/Opinions.tsx';
import { NewOpinion } from './components/NewOpinion.tsx';
import { OpinionsContextProvider } from './store/opinions-context.tsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <OpinionsContextProvider>
          <NewOpinion />
          <Opinions />
        </OpinionsContextProvider>
      </main>
    </>
  );
}

export default App;
