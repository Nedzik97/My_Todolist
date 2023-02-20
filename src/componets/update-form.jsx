import React from 'react'
import PropTypes from 'prop-types'

export const UpdateForm = ({
  editTask,
  setEditTask,
  tasksList,
  setTasksList,
}) => {
  const cancelUpdate = () => {
    setEditTask('')
  }

  const changeTask = (event) => {
    let newEntry = {
      id: editTask.id,
      title: event.target.value,
      isComplete: editTask.isComplete,
    }
    setEditTask(newEntry)
  }

  const updateTask = () => {
    let filterRecords = tasksList.filter((task) => task.id !== editTask.id)
    let updateTask = [...filterRecords, editTask]
    setTasksList(updateTask)
    setEditTask('')
  }

  return (
    <>
      <div className="edit-input-wrapper">
        <input
          value={updateTask && updateTask.title}
          onChange={(event) => changeTask(event)}
          className="edit-input"
        />
      </div>
      <div className="edit-button-wrapper">
        <button onClick={updateTask} className="button-update-task">
          Update
        </button>
        <button onClick={cancelUpdate} className="button-undo-edit">
          Cancel
        </button>
      </div>
      <br />
    </>
  )
}

UpdateForm.propTypes = {
  editTask: PropTypes.string.isRequired,
  setEditTask: PropTypes.func.isRequired,
  setTasksList: PropTypes.func.isRequired,
  tasksList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ),
}
