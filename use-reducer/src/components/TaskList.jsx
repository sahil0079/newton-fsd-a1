import React, { useState } from 'react'

function TaskList({ tasks, onDeleteTask, onEditTask }) {
    return (
        <ul>

            {tasks?.map(task => (
                <li key={task?.id}>
                    <Task task={task} onDelete={onDeleteTask} onEdit={onEditTask} />
                </li>
            ))}
        </ul>
    )
}


function Task({ task, onDelete, onEdit }) {

    const [isEditing, setIsEditing] = useState(false);

    let taskContent;
    let newTask = { ...task };
    if (isEditing) {
        //editing mode
        taskContent = (
            <>
                <input value={task?.task} onChange={e => onEdit({ ...newTask, task: e.target.value })} />
                <button onClick={() => setIsEditing(false)} >Save</button>
            </>
        )

    } else {
        //reading mode
        taskContent = (
            <>
                {task?.task}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    return (
        <label>
            <input type='checkbox' />
            {taskContent}
            <button onClick={() => onDelete(task.id)} >Delete</button>
        </label>
    )
}

export default TaskList