import React, { useState } from 'react'

function AddTask({ onAddTask }) {
    const [task, setTask] = useState('');
    return (
        <>
            <input placeholder='Add task...' value={task} onChange={e => setTask(e.target.value)} />

            <button onClick={() => {
                setTask('');
                onAddTask(task);
            }} >Add</button>
        </>
    )
}

export default AddTask