import RootLayout from '@/layout/RootLayout';
import AddProject from '@/components/projects/AddProject';
import ProjectOverview from '@/components/projects/ProjectOverview';

function App() {
    return (
        <RootLayout>
            <AddProject />
            <ProjectOverview />
        </RootLayout>
    );
}

export default App;
