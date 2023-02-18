import React from 'react'

export const ToDo = ({ toDos, setToDo, setUpdateData, filtredTodos }) => {
  const markDone = (id) => {
    let newTask = toDos.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status }
      }
      return task
    })
    setToDo(newTask)
  }

  const deleteTask = (id) => {
    let newTasks = toDos.filter((task) => task.id !== id)
    setToDo(newTasks)
  }

  return (
    <>
      {filtredTodos.map((task, index) => {
        return (
          <div className="task-wrapper" key={task.id}>
            <div className={task.status ? 'done' : ''}>
              <span className="taskNumber">{index + 1}</span>
              <span className="taskText">{task.title}</span>
            </div>
            <div className="button-wraper">
              <button
                className="button button-complete-task"
                onClick={(e) => markDone(task.id)}
              >
                {task.status ? 'Uncomplete' : 'Complete'}
              </button>
              {task.status ? null : (
                <button
                  className="button button-edit-task"
                  onClick={() =>
                    setUpdateData({
                      id: task.id,
                      title: task.title,
                      status: task.status ? true : false,
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
