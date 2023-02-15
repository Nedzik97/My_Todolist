
const CreateTaskForm = ({task, setTask, addTask}) => {
const handleSubmit = (event) => {
	event.preventDefault();
	addTask(event.target[0].value)

}

  return (
		<form className="form-create-task"
		onSubmit={handleSubmit}
		>
			<input
		  	onChange={(event) => {
				setTask(event.target.value);
		    	}}
				className='input-create-task' 
				type='text' 
				name='create-task'
				value={task}
				placeholder='Create a new task'/>
			<button 
				className='button-add-task'> Add task 
			</button>
		</form>
  )
}

export {CreateTaskForm};
