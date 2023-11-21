import CoreConcept from '@/components/concepts/CoreConcept';
import Section from '@/components/ui/Section';

export default function CoreConcepts({ concepts }) {
    return (
        <Section id='core-concepts' title='Core Concepts'>
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
        </Section>
    );
}
