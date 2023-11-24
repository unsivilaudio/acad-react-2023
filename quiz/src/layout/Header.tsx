import logoImg from '@/assets/quiz-logo.png';

export default function Header() {
    return (
        <header className='my-8 space-y-3 text-center'>
            <img
                className='filter-[drop-shadow(0_0_4px_rgba(0,0,0,0.6))] mx-auto h-12 w-12'
                src={logoImg}
                alt='quiz logo'
            />
            <h1 className='font-title bg-gradient-to-b from-[#e781fb] from-[40%] to-[#8e76fa] to-[60%] bg-clip-text text-5xl font-bold uppercase tracking-[0.6rem] text-transparent'>
                ReactQuiz
            </h1>
        </header>
    );
}
