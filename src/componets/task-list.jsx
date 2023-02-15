import React from "react";

const TaskList = ({tasks, deleteTask}) => {
  return (
		<>
			{tasks?.length > 0 ? (
				<ul className="task-list">
					{tasks.map((task, index) => (
						<div className="task" key={index}>
							<li> {task} </li> 
								<button className="button-complete-task">Complete</button>
								<button className="button-redact-task">Redact</button>
								<button className="delete-button" onClick={() => { deleteTask(task) }}>Delete</button>
						</div>
					))}
				</ul>
			) : (
			 <div className="empty">
				<p>No task found</p>
			 </div>
			)
		}
		</>
)
};

export {TaskList};
