import { useState } from 'react';

import { EXAMPLES } from '@/data';
import Section from '@/components/ui/Section';
import TabButton from '@/components/examples/TabButton';
import Tabs from '@/components/ui/Tabs';

export default function Examples() {
    return (
        <Section id='examples' title='Examples'>
            <Tabs tabData={EXAMPLES}>
                <Tabs.Menu>
                    <Tabs.Button select='components'>Components</Tabs.Button>
                    <Tabs.Button select='jsx'>JSX</Tabs.Button>
                    <Tabs.Button select='props'>Props</Tabs.Button>
                    <Tabs.Button select='state'>State</Tabs.Button>
                </Tabs.Menu>
                <Tabs.Content fallback={<p>Please Select A Topic</p>}>
                    {data => (
                        <>
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                            <pre>
                                <code>{data.code}</code>
                            </pre>
                        </>
                    )}
                </Tabs.Content>
            </Tabs>
        </Section>
    );
}

/**
 *     return (
        <Section id='examples' title='Examples'>
            <menu>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    onClick={handleSelect.bind(null, 'components')}
                >
                    Components
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onClick={handleSelect.bind(null, 'jsx')}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onClick={handleSelect.bind(null, 'props')}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onClick={handleSelect.bind(null, 'state')}
                >
                    State
                </TabButton>
            </menu>
            {tabContent}
        </Section>
    );
 */
