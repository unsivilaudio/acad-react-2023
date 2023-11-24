import {
    createContext,
    useReducer,
    type PropsWithChildren,
    useContext,
} from 'react';
import { produce } from 'immer';

export type ProjectTask = {
    id: string;
    content: string;
    isCompleted: boolean;
};

export type Project = {
    id: string;
    title: string;
    description: string;
    date: Date;
    tasks: ProjectTask[];
};

const INITIAL_STATE = {
    projects: [
        {
            id: 'p1',
            title: 'Clean House',
            description: 'The whole house could use a deep cleaning.',
            tasks: [],
            date: new Date(),
        },
        {
            id: 'p2',
            title: 'Car',
            description:
                'My car could use some attention before the snow falls.',
            tasks: [],
            date: new Date(),
        },
    ] as Project[],
    selectedProject: null as null | string,
    showAddProject: false,
};

type ProjectsState = typeof INITIAL_STATE;

type ProjectsCtxValue = ProjectsState & {
    addProject({
        title,
        description,
    }: Omit<Project, 'id' | 'tasks' | 'date'>): void;
    deleteProject(): void;
    selectProject(id: string): void;
    addTask(content: string): void;
    clearTask(id: string): void;
    markTask(id: string): void;
    toggleShowAddProject(show?: boolean): void;
};

const ProjectsContext = createContext<ProjectsCtxValue | null>(null);
export const useProjectsContext = () => {
    const context = useContext(ProjectsContext);
    return context!;
};

type AddProject = {
    type: 'ADD_PROJECT';
    payload: Project;
};

type SelectProject = {
    type: 'SELECT_PROJECT';
    payload: { id: string };
};

type DeleteProject = {
    type: 'DELETE_PROJECT';
    payload?: never;
};

type AddProjectTask = {
    type: 'ADD_PROJECT_TASK';
    payload: ProjectTask;
};

type ClearProjectTask = {
    type: 'CLEAR_PROJECT_TASK';
    payload: {
        id: string;
    };
};

type MarkProjectTask = {
    type: 'MARK_PROJECT_TASK';
    payload: {
        id: string;
    };
};

type ShowAddProject = {
    type: 'TOGGLE_SHOW_PROJECT';
    payload?: boolean;
};

type ProjectsActions =
    | AddProject
    | SelectProject
    | DeleteProject
    | AddProjectTask
    | ClearProjectTask
    | MarkProjectTask
    | ShowAddProject;

const projectsReducer = produce(
    (state: ProjectsState, action: ProjectsActions) => {
        const { type, payload } = action;
        let prjIdx: number;
        switch (type) {
            case 'ADD_PROJECT':
                state.projects = state.projects.concat(payload);
                state.selectedProject = payload.id;
                break;
            case 'SELECT_PROJECT':
                state.selectedProject = payload.id;
                break;
            case 'MARK_PROJECT_TASK':
                if (!state.selectedProject) return state;
                prjIdx = state.projects.findIndex(
                    (prj) => prj.id === state.selectedProject,
                );
                if (prjIdx > -1) {
                    const taskIdx = state.projects[prjIdx].tasks.findIndex(
                        (task) => task.id === action.payload.id,
                    );
                    if (taskIdx > -1) {
                        const task = state.projects[prjIdx].tasks[taskIdx];
                        state.projects[prjIdx].tasks[taskIdx] = {
                            ...task,
                            isCompleted: !task.isCompleted,
                        };
                    }
                }
                break;
            case 'CLEAR_PROJECT_TASK':
                if (!state.selectedProject) return state;
                prjIdx = state.projects.findIndex(
                    (prj) => prj.id === state.selectedProject,
                );
                if (prjIdx > -1) {
                    state.projects[prjIdx].tasks = state.projects[
                        prjIdx
                    ].tasks.filter((task) => task.id !== action.payload.id);
                }
                break;
            case 'DELETE_PROJECT':
                if (!state.selectedProject) break;
                state.projects = state.projects.filter(
                    (prj) => prj.id !== state.selectedProject,
                );
                break;
            case 'ADD_PROJECT_TASK':
                prjIdx = state.projects.findIndex(
                    (prj) => prj.id === state.selectedProject,
                );
                state.projects[prjIdx].tasks.push(payload);
                break;
            case 'TOGGLE_SHOW_PROJECT':
                state.showAddProject = payload ?? !state.showAddProject;
                break;
            default:
                break;
        }
        return state;
    },
    INITIAL_STATE,
);

export function ProjectsContextProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(projectsReducer, INITIAL_STATE);

    function handleAddProject(project: Omit<Project, 'date' | 'id' | 'tasks'>) {
        const payload: Project = {
            id: Math.round(Math.random() * 1e10).toString(16),
            tasks: [],
            date: new Date(),
            ...project,
        };
        dispatch({ type: 'ADD_PROJECT', payload });
    }

    function handleSelectProject(id: string) {
        dispatch({ type: 'SELECT_PROJECT', payload: { id } });
    }

    function handleDeleteProject() {
        dispatch({ type: 'DELETE_PROJECT' });
    }

    function handleAddTask(content: string) {
        const payload: ProjectTask = {
            id: Math.round(Math.random() * 1e10).toString(16),
            content,
            isCompleted: false,
        };
        dispatch({ type: 'ADD_PROJECT_TASK', payload });
    }

    function handleClearTask(id: string) {
        dispatch({ type: 'CLEAR_PROJECT_TASK', payload: { id } });
    }

    function handleMarkTask(id: string) {
        dispatch({ type: 'MARK_PROJECT_TASK', payload: { id } });
    }

    function handleShowAddProject(show: boolean) {
        dispatch({ type: 'TOGGLE_SHOW_PROJECT', payload: show });
    }

    return (
        <ProjectsContext.Provider
            value={{
                ...state,
                addProject: handleAddProject,
                selectProject: handleSelectProject,
                deleteProject: handleDeleteProject,
                addTask: handleAddTask,
                clearTask: handleClearTask,
                markTask: handleMarkTask,
                toggleShowAddProject: handleShowAddProject,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
}
