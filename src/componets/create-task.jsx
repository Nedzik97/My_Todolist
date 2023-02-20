import React from 'react'
import PropTypes from 'prop-types'

export const CreateTask = ({
  tasksList,
  setTasksList,
  setEditTask,
  filteredTasks,
}) => {
  const completeTask = (id) => {
    let newTask = tasksList.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete }
      }
      return task
    })
    setTasksList(newTask)
  }

  const deleteTask = (id) => {
    let newTasks = tasksList.filter((task) => task.id !== id)
    setTasksList(newTasks)
  }

  return (
    <>
      {filteredTasks.map((task, index) => {
        return (
          <div className="task-wrapper" key={task.id}>
            <div className={task.isComplete ? 'done' : ''}>
              <span className="taskNumber">{index + 1}</span>
              <span className="taskText">{task.title}</span>
            </div>
            <div className="button-wraper">
              <button
                className="button button-complete-task"
                onClick={() => completeTask(task.id)}
              >
                {task.isComplete ? 'Uncomplete' : 'Complete'}
              </button>
              {task.isComplete ? null : (
                <button
                  className="button button-edit-task"
                  onClick={() =>
                    setEditTask({
                      id: task.id,
                      title: task.title,
                      isComplete: task.isComplete,
                    })
                  }
                >
                  Edit
                </button>
              )}
              <button
                className="button button-delete-task"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}

CreateTask.propTypes = {
  setTasksList: PropTypes.func.isRequired,
  setEditTask: PropTypes.func.isRequired,
  filteredTasks: PropTypes.array.isRequired,
  tasksList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ),
}
