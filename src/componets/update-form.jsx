import React from 'react'

export const UpdateForm = ({ updateData, setUpdateData, toDos, setToDo }) => {
  const cancelUpdate = () => {
    setUpdateData('')
  }

  const changeTask = (event) => {
    let newEntry = {
      id: updateData.id,
      title: event.target.value,
      status: updateData.status ? true : false,
    }
    setUpdateData(newEntry)
  }

  const updateTask = () => {
    let filterRecords = [...toDos].filter((task) => task.id !== updateData.id)
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject)
    setUpdateData('')
  }

  return (
    <>
      <div className="edit-input-wrapper">
        <input
          value={updateData && updateData.title}
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
