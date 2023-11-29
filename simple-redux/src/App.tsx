import useAuth from '@/store/hooks/use-auth';

import Auth from '@/components/Auth';
import Header from '@/components/Header';
import Counter from './components/Counter';
import UserProfile from '@/components/UserProfile';

function App() {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <Header />
            {!isLoggedIn && <Auth />}
            {isLoggedIn && <UserProfile />}
            <Counter />
        </>
    );
}

export default App;
