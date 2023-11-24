import type { ReactNode } from 'react';

import noProjectImg from '@/assets/no-projects.png';
import Button from '@/components/ui/Button';
import { useProjectsContext } from '@/context/projects-context';
import ProjectDetail from '@/components/projects/ProjectDetail';
import ProjectTasks from '@/components/projects/ProjectTasks';

export default function ProjectsList() {
    const {
        toggleShowAddProject,
        projects,
        selectedProject,
        addTask,
        deleteProject,
        clearTask,
        markTask,
    } = useProjectsContext();

    function handleShowAddProject() {
        toggleShowAddProject();
    }

    let content: ReactNode;

    content = (
        <div className='flex min-h-[30rem] flex-col items-center justify-center gap-6'>
            <img
                className='mx-auto h-[12rem] w-auto object-contain'
                src={noProjectImg}
                alt='clipboard with pencil'
            />
            <h2 className='text-center font-title text-3xl font-semibold'>
                Select a project on the left-hand side to get started.
            </h2>
            <p className='text-lg italic'>Or add a new project below...</p>
            <div>
                <Button onClick={handleShowAddProject}>
                    Create A New Project
                </Button>
            </div>
        </div>
    );

    if (projects.length === 0) {
        content = (
            <div className='flex min-h-[30rem] flex-col items-center justify-center gap-6'>
                <img
                    className='mx-auto h-[12rem] w-auto object-contain'
                    src={noProjectImg}
                    alt='clipboard with pencil'
                />
                <h2 className='text text-center font-title text-3xl font-semibold text-red-500'>
                    Uh oh! Looks like you don't have any projects yet.
                </h2>
                <p className='text-lg italic'>
                    Add a project to get started...
                </p>
                <div>
                    <Button onClick={handleShowAddProject}>
                        Create A New Project
                    </Button>
                </div>
            </div>
        );
    }

    const prjMatch = projects.find((prj) => prj.id === selectedProject);
    console.log(prjMatch);
    if (prjMatch) {
        content = (
            <>
                <ProjectDetail {...prjMatch} onDeleteProject={deleteProject} />
                <div className='h-1 rounded-full bg-slate-400' />
                <ProjectTasks
                    tasks={prjMatch.tasks}
                    onAddTask={addTask}
                    onDeleteTask={clearTask}
                    onMarkTask={markTask}
                />
            </>
        );
    }

    return <div className='mx-auto max-w-[48rem]'>{content}</div>;
}
