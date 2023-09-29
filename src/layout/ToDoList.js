import { useState } from 'react';
import './_ToDoList.scss';

const ToDoList = () => {
    const [taskList, setTaskList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    
    const addNewTask = () => {
        if(inputValue.trim() !== '') {
            setTaskList([...taskList, inputValue]);
            setInputValue('');
        }
    }

    const handleDeleteTask = (deleteTask) => {
        const updatedTasks = taskList.filter((task) => task !== deleteTask);
        setTaskList(updatedTasks);
      };

    return (
        <div className="toDoList">
            <div className="addTask">
                <input 
                    type='text' 
                    name='task' 
                    placeholder='enter task' 
                    value={inputValue}
                    onChange={handleInputChange} 
                />
                <button className='btn' onClick={addNewTask}>add</button>
            </div>
            <div className='allTasks'>
                <ul>
                    {taskList.map((task, index) => (
                        
                        <li key={index}><input type="checkbox" />{task}<a onClick={() => handleDeleteTask(task)}>X</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default ToDoList;