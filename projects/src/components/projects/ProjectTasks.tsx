import type { SyntheticEvent } from 'react';
import type { ProjectTask } from '@/context/projects-context';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

type ProjectTasksProps = {
    tasks: ProjectTask[];
    onAddTask(content: string): void;
    onDeleteTask(id: string): void;
    onMarkTask(id: string): void;
};

export default function ProjectTasks({
    tasks,
    onAddTask,
    onMarkTask,
    onDeleteTask,
}: ProjectTasksProps) {
    function handleAddTask(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const enteredTask = data.get('content') as string;
        if (enteredTask.trim() === '') return;
        onAddTask(enteredTask);
        event.currentTarget.reset();
    }

    return (
        <div>
            <h2 className='mt-6 font-title text-3xl font-semibold'>Tasks</h2>
            <form
                className='mt-2 flex items-center gap-4'
                onSubmit={handleAddTask}
            >
                <Input id='content' className='m-0' />
                <Button
                    variant='text'
                    className='border-none hover:border-none'
                >
                    Add Task
                </Button>
            </form>
            <ul className='mt-4 rounded-lg bg-slate-300 px-5 py-2'>
                {tasks.length <= 0 && (
                    <div className='flex h-[15rem] w-full items-center justify-center'>
                        <p className='italic text-[#84888b]'>
                            You don't have an tasks yet. Try adding some.
                        </p>
                    </div>
                )}
                {tasks.length > 0 &&
                    tasks.map((task) => (
                        <li
                            key={task.id}
                            className='flex justify-between border-t-2 border-[rgba(0,0,0,0.15)] px-4 py-2 first-of-type:border-none'
                        >
                            <span
                                className='cursor-pointer'
                                style={{
                                    textDecoration: task.isCompleted
                                        ? 'line-through'
                                        : undefined,
                                }}
                                onClick={onMarkTask.bind(null, task.id)}
                            >
                                {task.content}
                            </span>
                            <Button
                                variant='text'
                                className='border-none text-xs hover:border-none hover:text-red-500'
                                onClick={onDeleteTask.bind(null, task.id)}
                            >
                                Clear
                            </Button>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
