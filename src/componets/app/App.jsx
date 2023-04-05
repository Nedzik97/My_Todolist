import React, { useState } from 'react'
import { UpdateForm } from '../update-form/update-form.jsx'
import { TaskList } from '../task-list/task-list.jsx'
import { FilterButtons } from '../task-filter/task-filters.jsx'
import { CreateTaskForm } from '../create-task-form/create-task-form.jsx'
import styles from './App.module.scss'

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
    <div className={styles.App}>
      <h1 className={styles.pageTitle}>To Do list</h1>
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
      <TaskList
        tasksList={tasksList}
        setTasksList={setTasksList}
        setEditTask={setEditTask}
        filteredTasks={filteredTasks}
      />
    </div>
  )
}

export default App
