import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header className='my-8 flex flex-col items-center justify-center md:mb-16'>
            <img
                className='mb-8 h-[11rem] w-[11rem] object-contain'
                src={logo}
                alt='A canvas'
            />
            <h1 className='font-title text-center text-2xl font-semibold uppercase tracking-[0.4rem] text-[#9a3412] md:text-4xl'>
                ReactArt
            </h1>
            <p className='text-center text-[#a39191]'>
                A community of artists and art-lovers.
            </p>
        </header>
    );
}
