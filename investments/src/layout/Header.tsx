import headerImg from '@/assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <header className='mx-auto my-6 space-y-4 text-center'>
            <img
                src={headerImg}
                alt='Investment Calculator'
                className='mx-auto h-[5rem] w-[5rem] bg-transparent object-contain'
            />
            <h1 className='text-2xl font-semibold'>Investment Calculator</h1>
        </header>
    );
}
