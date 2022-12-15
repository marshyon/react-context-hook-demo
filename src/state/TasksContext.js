import { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

const nextId_1 = uuidv4();
const nextId_2 = uuidv4();
const nextId_3 = uuidv4();

const initialTasks = [
    { id: nextId_1, text: 'Philosopher’s Path', done: false  },
    { id: nextId_2, text: 'Visit the temple', done: false },
    { id: nextId_3, text: 'Drink matcha', done: false }
];

export function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider
                value={dispatch}
            >
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

export function useTasks() {
    return useContext(TasksContext);
}

export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            console.log('tasksReducer', action.type, ' addition of ', action.id, ' => ', action.text)
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'changed': {
            console.log('tasksReducer', action.type, ' change is ', action.task)
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            console.log('tasksReducer', action.type, ' id: ', action.id)
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

