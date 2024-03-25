import Accordion from '@/components/accordion/Accordion';

export default function App() {
    return (
        <main>
            <section>
                <h2>Why work with us?</h2>
                <Accordion className='my-8 overflow-hidden rounded-md border border-[#5d6273]'>
                    <Accordion.Item id='experience' className='bg-[#1e2130]'>
                        <Accordion.Title>
                            We got 20 years of experience
                        </Accordion.Title>
                        <Accordion.Content>
                            <article>
                                <p>You can&apos;t go wrong with us.</p>
                                <p>
                                    We are in the business of planning highly
                                    individualized vacation trips for over 20
                                    years.
                                </p>
                            </article>
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item id='local-guides' className='bg-[#1e2130]'>
                        <Accordion.Title>
                            We're working with local guides
                        </Accordion.Title>
                        <Accordion.Content>
                            <article>
                                <p>
                                    We are not doing this along from our office.
                                </p>
                                <p>
                                    Instead, we are working with local guides to
                                    ensure a safe pleasant vacation.
                                </p>
                            </article>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </section>
        </main>
    );
}
