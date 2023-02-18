import './App.css';
import React, {useState} from 'react';
import { CreateTaskForm } from './componets/create-task-form.jsx';
import { UpdateForm } from './componets/update-form.jsx';
import { ToDo } from './componets/todo.jsx';
import { SorttingButtons } from './componets/task-filters';

export const filters = {
	all: 'all',
	completed: 'completed',
	active: 'active',
}

function App() {
	const [toDos, setToDo] = useState([]);
	const [newTask, setNewTask] = useState('');
	const [updateData, setUpdateData] = useState('');
	const [filterValue, setFilterValue] = useState(filters.all);

	const filtredTodos = toDos.filter((todo) => {
		if(filterValue === filters.all) {
			return true;
		}
		if(filterValue === filters.active){
			return todo.status === false;
		}
		return todo.status === true;
		});


  return (
    <div className="App">
			<h1 className='page-title'>To Do list</h1>
    	{updateData && updateData ? (
      	<UpdateForm toDos={toDos} setToDo={setToDo} updateData={updateData} setUpdateData={setUpdateData}/>
    	) : (
      	<CreateTaskForm toDos={toDos} setToDo={setToDo} newTask={newTask} setNewTask={setNewTask} />
    	)}
			{filtredTodos.length !== 0 && <SorttingButtons setFilterValue={setFilterValue} filterValue={filterValue}/>}
    	{filtredTodos?.length ? '' : 'Not found task'}
			<ToDo toDos={toDos} setToDo={setToDo} setUpdateData={setUpdateData} filtredTodos={filtredTodos}/>
    </div>
  );
}

export default App;