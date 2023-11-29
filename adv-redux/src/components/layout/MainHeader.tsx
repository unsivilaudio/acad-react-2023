import CartButton from '../cart/CartButton';

export default function MainHeader() {
    return (
        <header className='flex h-20 w-full items-center justify-between bg-[#252424] px-[10%]'>
            <h1 className='text-4xl font-semibold text-[#eee]'>ReduxCart</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
