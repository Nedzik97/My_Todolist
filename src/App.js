import './App.css';
import React, {useState} from 'react';
import { CreateTaskForm } from './componets/crate-task-form.jsx';
import { TaskList } from './componets/task-list.jsx';


function App() {
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		if (task !== '') {
			setTasks((tasks) => [...tasks, task]);
			setTask('');
		}
	};

	const deleteTask = (text) => {
		const newTasks = tasks.filter((task) => {
			return task !== text;
		});
		setTasks(newTasks);
 	};

  return (
    <div className="App">
			<h1>To Do List</h1>
			<CreateTaskForm task={task} setTask={setTask} addTask={addTask} />
			<TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
};

export default App;


