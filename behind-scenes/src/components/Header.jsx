import { log } from '../log.js';
import logoImg from '../assets/logo.png';

export default function Header() {
    log('<Header /> rendered', 1);

    return (
        <header
            id='main-header'
            className='mx-auto my-8 text-center text-[#87a7a4]'
        >
            <img
                className='mx-auto h-24 w-24 object-contain drop-shadow-[0_0_8px_rgba(14,26,28,0.8)]'
                src={logoImg}
                alt='Magnifying glass analyzing a document'
            />
            <h1 className='text-2xl font-semibold tracking-[0.15rem]'>
                React - Behind The Scenes
            </h1>
        </header>
    );
}
