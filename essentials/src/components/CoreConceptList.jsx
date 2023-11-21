import CoreConcept from './CoreConcept';

export default function CoreConceptList({ concepts }) {
    return (
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                {concepts.map(({ title, description, image }) => (
                    <CoreConcept
                        key={title}
                        title={title}
                        description={description}
                        image={image}
                    />
                ))}
            </ul>
        </section>
    );
}
