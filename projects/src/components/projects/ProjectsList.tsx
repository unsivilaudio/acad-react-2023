import type { ReactNode } from 'react';
import { useProjectsContext } from '@/context/projects-context';
import Button from '@/components/ui/Button';
import ProjectDetail from '@/components/projects/ProjectDetail';
import ProjectTasks from '@/components/projects/ProjectTasks';

type ProjectsListProps = {
    onShowAddProject(): void;
};

export default function ProjectsList({ onShowAddProject }: ProjectsListProps) {
    const projectsCtx = useProjectsContext();

    let content: ReactNode;

    content = (
        <div className='flex min-h-[30rem] flex-col items-center justify-center gap-6'>
            <h2 className='text-center font-title text-3xl font-semibold'>
                Select a project on the left-hand side to get started.
            </h2>
            <p className='text-lg italic'>Or add a new project below...</p>
            <div>
                <Button onClick={onShowAddProject}>Create Project</Button>
            </div>
        </div>
    );

    if (projectsCtx.projects.length === 0) {
        content = (
            <div className='flex min-h-[30rem] flex-col items-center justify-center gap-6'>
                <h2 className='text text-center font-title text-3xl font-semibold text-red-500'>
                    Uh oh! Looks like you don't have any projects yet.
                </h2>
                <p className='text-lg italic'>
                    Add a project to get started...
                </p>
                <div>
                    <Button onClick={onShowAddProject}>Add A Project</Button>
                </div>
            </div>
        );
    }

    const selectedProject = projectsCtx.projects.find(
        (prj) => prj.id === projectsCtx.selectedProject,
    );
    console.log(selectedProject);
    if (selectedProject) {
        content = (
            <>
                <ProjectDetail
                    {...selectedProject}
                    onDeleteProject={projectsCtx.deleteProject.bind(
                        null,
                        selectedProject.id,
                    )}
                />
                <div className='h-1 rounded-full bg-slate-400' />
                <ProjectTasks
                    tasks={selectedProject.tasks}
                    onAddTask={projectsCtx.addTask}
                    onDeleteTask={projectsCtx.clearTask}
                    onMarkTask={projectsCtx.markTask}
                />
            </>
        );
    }

    return <div className='mx-auto max-w-[48rem]'>{content}</div>;
}
