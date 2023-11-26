import logoImg from '../assets/logo.jpg';

export default function Header() {
    return (
        <header className='my-8 text-center'>
            <img
                className='mx-auto h-20 w-20 rounded-full border-2 border-[#758a8a] object-contain drop-shadow-[0_0_4px_rgba(31,42,42,0.5)]'
                src={logoImg}
                alt='A form and a pencil'
            />
            <h1 className='my-4 text-5xl font-bold tracking-[0.2rem] text-[#2f4444]'>
                React Forms
            </h1>
        </header>
    );
}
