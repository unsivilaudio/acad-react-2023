import { useState } from 'react';
import { EXAMPLES } from '../data';
import ExampleButton from './ExampleButton';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(category) {
        setSelectedTopic(category);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
                <ExampleButton
                    isSelected={selectedTopic === 'components'}
                    onSelect={handleSelect.bind(null, 'components')}
                >
                    Components
                </ExampleButton>
                <ExampleButton
                    isSelected={selectedTopic === 'jsx'}
                    onSelect={handleSelect.bind(null, 'jsx')}
                >
                    JSX
                </ExampleButton>
                <ExampleButton
                    isSelected={selectedTopic === 'props'}
                    onSelect={handleSelect.bind(null, 'props')}
                >
                    Props
                </ExampleButton>
                <ExampleButton
                    isSelected={selectedTopic === 'state'}
                    onSelect={handleSelect.bind(null, 'state')}
                >
                    State
                </ExampleButton>
            </menu>
            {tabContent}
        </section>
    );
}
