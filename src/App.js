import './App.css'
import React, { useState } from 'react'
import { CreateTaskForm } from './componets/create-task-form.jsx'
import { UpdateForm } from './componets/update-form.jsx'
import { CreateTask } from './componets/create-task.jsx'
import { FilterButtons } from './componets/task-filters'

export const filters = {
  all: 'all',
  completed: 'completed',
  active: 'active',
}

function App() {
  const [tasksList, setTasksList] = useState([])
  const [task, setTask] = useState(null)
  const [editTask, setEditTask] = useState(null)
  const [filterValue, setFilterValue] = useState(filters.all)

  const filteredTasks = tasksList.filter((task) => {
    if (filterValue === filters.all) {
      return true
    }
    if (filterValue === filters.active) {
      return task.isComplete === false
    }
    return task.isComplete === true
  })

  return (
    <div className="App">
      <h1 className="page-title">To Do list</h1>
      {editTask && editTask ? (
        <UpdateForm
          tasksList={tasksList}
          setTasksList={setTasksList}
          editTask={editTask}
          setEditTask={setEditTask}
        />
      ) : (
        <CreateTaskForm
          tasksList={tasksList}
          setTasksList={setTasksList}
          task={task}
          setTask={setTask}
        />
      )}
      {tasksList.length !== 0 && (
        <FilterButtons
          setFilterValue={setFilterValue}
          filterValue={filterValue}
        />
      )}
      {tasksList?.length ? '' : 'Not found task'}
      <CreateTask
        tasksList={tasksList}
        setTasksList={setTasksList}
        setEditTask={setEditTask}
        filteredTasks={filteredTasks}
      />
    </div>
  )
}

export default App
