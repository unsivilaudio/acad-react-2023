import { Link } from 'react-router-dom';

import meetupImg from '../../assets/meetup.jpg';

export default function EventsIntroSection() {
    return (
        <section
            className='-mt-32 mb-12 px-[15%] py-32 text-center text-[#222c31]'
            id='overview-section'
            style={{ backgroundImage: `url(${meetupImg})` }}
        >
            <h2 className='mx-auto my-8 text-4xl font-semibold text-[#1d161a]'>
                Connect with amazing people <br />
                or{' '}
                <strong className='text-[#e30d7c]'>find a new passion</strong>
            </h2>
            <p
                className='font-title text-xl'
                style={{
                    lineHeight: 1.5,
                    textShadow: '0 2px 2px rgba(0,0,0,0.26)',
                }}
            >
                Anyone can organize and join events on React Event!
            </p>
            <p
                className='font-title text-xl'
                style={{
                    lineHeight: '2.5',
                    textShadow: '0 2px 2px rgba(0,0,0,0.26)',
                }}
            >
                <Link
                    to='/events/new'
                    className='rounded bg-[#e30d7c] px-6 py-2 font-bold text-white shadow-[0_2px_4px_rgba(0,0,0,0.26)] duration-300 hover:bg-[#e30d5b] hover:shadow-[0_2px_8px_rgba(0,0,0,0.26)]'
                >
                    Create your first event
                </Link>
            </p>
        </section>
    );
}
