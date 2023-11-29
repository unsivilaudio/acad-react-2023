import Button from '@/components/ui/Button';
import useAuth from '@/store/hooks/use-auth';

export default function Header() {
    const { isLoggedIn, logout } = useAuth();

    return (
        <header className='flex h-20 w-full items-center justify-between bg-[#3c0080] px-[10%] text-white'>
            <h1 className='text-5xl'>Redux Auth</h1>
            <nav>
                {isLoggedIn && (
                    <ul className='flex items-center gap-4'>
                        <li className='mb-4'>
                            <a
                                href='/'
                                className='decoration-none text-lg text-white duration-200 hover:text-[#b864da] active:text-[#b864da]'
                            >
                                My Products
                            </a>
                        </li>
                        <li className='mb-4'>
                            <a
                                href='/'
                                className='decoration-none text-lg text-white duration-200 hover:text-[#b864da] active:text-[#b864da]'
                            >
                                My Sales
                            </a>
                        </li>
                        <li className='mb-4'>
                            <Button
                                variant='tertiary'
                                onClick={logout.bind(null, undefined)}
                            >
                                Logout
                            </Button>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
}
