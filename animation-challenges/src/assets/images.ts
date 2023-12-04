import { Challenge } from '@/types/challenge';

import constructingImg from '../assets/constructing.png';
import cookingImg from '../assets/cooking.png';
import familyTimeImg from '../assets/family-time.png';
import playingGuitarImg from '../assets/playing-guitar.png';
import romanticWalkImg from '../assets/romantic-walk.png';
import workingOnComputerImg from '../assets/working-on-computer.png';
import workingOutImg from '../assets/working-out.png';

const images = [
    { src: constructingImg, alt: 'Person working on some furniture.' },
    { src: cookingImg, alt: 'Person cooking a meal.' },
    { src: familyTimeImg, alt: 'Family spending time together.' },
    { src: playingGuitarImg, alt: 'Person playing the guitar.' },
    { src: romanticWalkImg, alt: 'Couple walking together in the moonshine.' },
    { src: workingOnComputerImg, alt: 'Person doing work on a computer.' },
    { src: workingOutImg, alt: 'Person working out.' },
];

export const DUMMY_CHALLENGES: Challenge[] = [
    {
        id: 'c1',
        title: 'Learn React',
        description: 'With framer motion (and many other things).',
        deadline: '2023-12-27',
        status: 'active',
        image: images[1],
    },
    {
        id: 'c2',
        title: 'Learn Javascript',
        description:
            'Study modern Javascript, and learn all the latest syntax.',
        deadline: '2023-12-20',
        status: 'completed',
        image: images[4],
    },
    {
        id: 'c3',
        title: 'Build Web App',
        description:
            'Build a web application with all the knowledge gained through your studies.',
        deadline: '2024-01-10',
        status: 'active',
        image: images[3],
    },
];

export default images;
