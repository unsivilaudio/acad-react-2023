import { cloneElement, createContext, useContext, useState } from 'react';

const TabsContext = createContext();

export function Menu({ children }) {
    return <menu>{children}</menu>;
}

export function Button({ children, select }) {
    const { show, selectedTab } = useContext(TabsContext);
    const isSelected = select === selectedTab;

    return cloneElement(
        <li>
            <button className={isSelected ? 'active' : ''}>{children}</button>
        </li>,
        {
            onClick: () => show(select),
        }
    );
}

export function Content({ fallback, children, name }) {
    const { tabContent } = useContext(TabsContext);

    if (!tabContent)
        return fallback !== undefined ? cloneElement(fallback) : null;

    if (typeof children === 'function') {
        return children(tabContent);
    }
    return children;
}

export default function Tabs({ children, tabData }) {
    const [selectedTab, setSelectedTab] = useState('');
    const tabContent = tabData[selectedTab];

    const show = setSelectedTab;

    return (
        <TabsContext.Provider value={{ show, selectedTab, tabContent }}>
            <div id='tab-content'>{children}</div>
        </TabsContext.Provider>
    );
}

Tabs.Menu = Menu;
Tabs.Button = Button;
Tabs.Content = Content;
