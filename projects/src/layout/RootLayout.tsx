import type { PropsWithChildren } from 'react';
import { ProjectsContextProvider } from '@/context/projects-context';
import Sidebar from '@/layout/Sidebar';

type RootLayoutProps = PropsWithChildren & {
    onShowAddProject(): void;
};

export default function RootLayout({
    children,
    onShowAddProject,
}: RootLayoutProps) {
    return (
        <ProjectsContextProvider>
            <div className='flex'>
                <Sidebar onShowAddProject={onShowAddProject} />
                <main className='min-h-[100dvh] flex-grow basis-9/12 px-6 py-12'>
                    {children}
                </main>
            </div>
        </ProjectsContextProvider>
    );
}
