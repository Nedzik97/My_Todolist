export const CreateTaskForm = ({ newTask, setNewTask, toDos, setToDo }) => {
	const addTask = (event) => {
		event.preventDefault();
    if(newTask) {
      let newEntry = { id: new Date(), title: newTask, status: false }
      setToDo([...toDos, newEntry])
      setNewTask('');
    }
  };

	return(
    <>
      <div className="row">
        <form 
					className="input-wrapper"
					onSubmit={addTask} 
					>
          <input 
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            className="input-add-task"
          />
					<button className="button-create-task">Add Task</button>
        </form>
      </div>
      <br />
    </>
  )
};
