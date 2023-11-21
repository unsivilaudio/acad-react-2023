import reactImg from '@/assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const rndIdx = genRandomInt(reactDescriptions.length - 1);
    const keyword = reactDescriptions[rndIdx];
    return (
        <header>
            <img src={reactImg} alt='Stylized atom' />
            <h1>React Essentials</h1>
            <p>
                <span>{keyword}</span> React concepts you will need for almost
                any app you are going to build!
            </p>
        </header>
    );
}
