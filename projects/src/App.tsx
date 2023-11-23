import { useState } from 'react';
import RootLayout from '@/layout/RootLayout';
import AddProject from '@/components/projects/AddProject';
import ProjectsList from '@/components/projects/ProjectsList';

function App() {
    const [showAddProject, setShowAddProject] = useState(false);

    function handleToggleAddProject() {
        setShowAddProject((ps) => !ps);
    }

    function handleCloseAddProject() {
        setShowAddProject(false);
    }

    return (
        <RootLayout onShowAddProject={handleToggleAddProject}>
            <AddProject open={showAddProject} onClose={handleCloseAddProject} />
            <ProjectsList onShowAddProject={handleToggleAddProject} />
        </RootLayout>
    );
}

export default App;
