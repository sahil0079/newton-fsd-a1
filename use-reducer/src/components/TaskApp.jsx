import React, { useReducer } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'

let nextId = 3;
const initialTasks = [
    { id: 0, task: 'Visit temple', done: true },
    { id: 1, task: 'Practice React', done: false },
    { id: 2, task: 'Practice DSA', done: false },
];
//useReducer => it is hook that allows u to manage compelx state
//reducer => reducer is a pure function that takes state, actions and returns the updated state
//actions => actions are something that describes what u want to do
//dispatch => dispatch an action where to the reducer

const TASKS_ACTIONS = {
    ADD_TASK: 'add_task',
    EDIT_TASK: 'edit_task',
    DELETE_TASK: 'delete_task',
}

function tasksReducer(tasks, action) {
    console.log('action', action)

    switch (action.type) {
        case TASKS_ACTIONS.ADD_TASK: {
            //logic to add a task
            // const updatedTasks = [...tasks, { id: action.payload.id, task: action.payload.task, done: false }]

            // return updatedTasks;

            return [...tasks, { id: action.payload.id, task: action.payload.task, done: false }];
        }
        case TASKS_ACTIONS.EDIT_TASK: {
            //logic to edit a task

            return tasks.map(t => {

                if (t.id === action.payload.task.id) {
                    return action.task
                } else {
                    return t;
                }
            })
        }
        case TASKS_ACTIONS.DELETE_TASK: {
            //logic to delete a task
            return tasks.filter(t => t.id !== action.payload.id)
        }
        default: {
            throw Error('Unknown action: ')
        }
    }

}


//flow of useReducer

//ui (event happens) => ui dispatches an action => reducer interprets the action and updates the state => updated ui is shown



function TaskApp() {

    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    // console.log('tasks', tasks)
    function handleAddTask(task) {

        console.log(task);
        const action = { type: TASKS_ACTIONS.ADD_TASK, payload: { id: nextId++, task: task } };
        dispatch(action);
    };

    function handleDeleteTask(taskId) {
        //dispatches an action
        dispatch({
            type: TASKS_ACTIONS.DELETE_TASK,
            payload: {
                id: taskId
            }
        });

    };

    function handleEditTask(task) {

        console.log('handleEditTask', task)

        dispatch({
            type: TASKS_ACTIONS.EDIT_TASK,
            payload: {
                task: task
            }
        });

    }
    return (
        <>
            <div>TaskApp</div>
            <AddTask onAddTask={handleAddTask} />
            <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />

        </>
    )
}

export default TaskApp