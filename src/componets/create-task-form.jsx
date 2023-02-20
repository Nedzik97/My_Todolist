import React from 'react'
import PropTypes from 'prop-types'

export const CreateTaskForm = ({ task, setTask, tasksList, setTasksList }) => {
  const addTask = (event) => {
    event.preventDefault()
    if (task) {
      let newEntry = { id: new Date(), title: task, isComplete: false }
      setTasksList([...tasksList, newEntry])
      setTask('')
    }
  }

  return (
    <>
      <div className="row">
        <form className="input-wrapper" onSubmit={addTask}>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="input-add-task"
          />
          <button className="button-create-task">Add Task</button>
        </form>
      </div>
      <br />
    </>
  )
}

CreateTaskForm.propTypes = {
  task: PropTypes.string.isRequired,
  setTask: PropTypes.func,
  setTasksList: PropTypes.func,
  tasksList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ),
}
