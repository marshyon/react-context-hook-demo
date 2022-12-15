import { useState } from 'react';
import { useTasksDispatch } from '../state/TasksContext.js';
import { v4 as uuidv4 } from 'uuid';

export default function AddTask({ onAddTask }) {
  
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  
  const addTask = () => {
    // console.log('AddTask.addTask()', text);
    const nextId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    setText('');
    dispatch({
      type: 'added',
      id: nextId,
      text: text,
    });
  };

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={ () => addTask() }>Add</button>
    </>
  );
}

// let nextId = 3;
