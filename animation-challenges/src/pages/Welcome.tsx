import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

import cityImg from '@/assets/city.jpg';
import heroImg from '@/assets/hero.png';

export default function WelcomePage() {
    const { scrollY } = useScroll();

    const yCity = useTransform(scrollY, [0, 200], [0, -100]);
    const opacityCity = useTransform(
        scrollY,
        [0, 200, 300, 500],
        [1, 0.5, 0.5, 0],
    );
    const yHero = useTransform(scrollY, [0, 200], [0, -150]);
    const opacityHero = useTransform(scrollY, [0, 300, 500], [1, 1, 0]);
    const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 300]);
    const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);

    return (
        <>
            <header id='welcome-header' className='relative h-screen'>
                <motion.div
                    id='welcome-header-content'
                    className='absolute left-[calc(50%-20rem)] top-[30%] z-10 w-[40rem] text-center'
                    style={{
                        textShadow: '0 0 6px rgba(0,0,0,0.5)',
                        scale: scaleText,
                        y: yText,
                    }}
                >
                    <h1 className='my-8 text-5xl font-bold'>
                        Ready for a challenge?
                    </h1>
                    <Link
                        id='cta-link'
                        to='/challenges'
                        className='inline-block rounded bg-[#0f61ef] px-4 py-2 text-sm uppercase text-white duration-200 hover:bg-[#0f86ef]'
                    >
                        Get Started
                    </Link>
                </motion.div>
                <motion.img
                    style={{ opacity: opacityCity, y: yCity }}
                    className='absolute top-0 h-full w-full object-cover'
                    src={cityImg}
                    alt='A city skyline touched by sunlight'
                    id='city-image'
                />
                <motion.img
                    style={{ opacity: opacityHero, y: yHero }}
                    className='absolute bottom-[20%] left-[30%] w-[25rem] max-w-[40%] object-cover drop-shadow-[0_0_6px_rgba(0,0,0,0.5)]'
                    src={heroImg}
                    alt='A superhero wearing a cape'
                    id='hero-image'
                />
            </header>
            <main
                id='welcome-content'
                className='mx-auto my-4 w-[80%] max-w-[40rem]'
            >
                <section className='my-24'>
                    <h2 className='my-8 text-4xl text-[#f2f25d]'>
                        There&apos;s never been a better time.
                    </h2>
                    <p>
                        With our platform, you can set, track, and conquer
                        challenges at your own pace. Whether it&apos;s personal
                        growth, professional achievements, or just for fun,
                        we&apos;ve got you covered.
                    </p>
                </section>

                <section className='my-24'>
                    <h2 className='my-8 text-4xl text-[#f2f25d]'>
                        Why Challenge Yourself?
                    </h2>
                    <p>
                        Challenges provide a framework for growth. They push
                        boundaries, test limits, and result in genuine progress.
                        Here, we believe everyone has untapped potential,
                        waiting to be unlocked.
                    </p>
                </section>

                <section className='my-24'>
                    <h2 className='my-8 text-4xl text-[#f2f25d]'>Features</h2>
                    <ul>
                        <li>
                            Custom challenge creation: Set the rules, define
                            your pace.
                        </li>
                        <li>
                            Track your progress: See your growth over time with
                            our analytics tools.
                        </li>
                        <li>
                            Community Support: Join our community and get
                            motivated by peers.
                        </li>
                    </ul>
                </section>

                <section className='my-24'>
                    <h2 className='my-8 text-4xl text-[#f2f25d]'>
                        Join Thousands Embracing The Challenge
                    </h2>
                    <p>
                        “I never realized what I was capable of until I set my
                        first challenge here. It&apos;s been a transformative
                        experience!” - Alex P.
                    </p>
                    {/* You can add more testimonials or even a carousel for multiple testimonials */}
                </section>
            </main>
        </>
    );
}
