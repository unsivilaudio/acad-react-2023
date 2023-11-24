import { useProjectsContext } from '@/context/projects-context';

export default function Sidebar() {
    const { projects, toggleShowAddProject, selectProject, selectedProjectId } =
        useProjectsContext();

    function handleOpenAddProject() {
        toggleShowAddProject();
    }

    return (
        <nav className='flex flex-shrink-0 flex-col gap-8 rounded-br-2xl rounded-tr-2xl bg-[#343436] px-8 py-12 text-[#ecedea] shadow-[0_0_12px_3px_rgba(0,0,0,0.6)]'>
            <div>
                <h2 className='font-title text-3xl font-normal uppercase tracking-widest'>
                    Your Projects
                </h2>
            </div>
            <div>
                <button
                    className='rounded-lg bg-[rgba(255,255,255,0.15)] px-6 py-2 pr-7 text-xl font-semibold text-[#b9bab7] drop-shadow-lg duration-300 hover:bg-[rgba(0,0,0,0.35)] hover:text-current'
                    onClick={handleOpenAddProject}
                >
                    <span>+</span> Add Project
                </button>
            </div>
            <ul className='space-y-2 text-lg'>
                {projects.map((prj) => (
                    <li
                        key={prj.id}
                        onClick={selectProject.bind(null, prj.id)}
                        className={`cursor-pointer rounded-lg px-3 py-1 capitalize duration-300 hover:bg-[#747171] ${
                            selectedProjectId === prj.id
                                ? 'bg-[#f342be] hover:bg-[#f342be]'
                                : ''
                        }`}
                    >
                        <button>{prj.title}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
