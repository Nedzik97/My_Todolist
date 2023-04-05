import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import cx from 'classnames'
import styles from './task-list.module.scss'

export const TaskList = ({
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
      <TransitionGroup>
        {filteredTasks.map((task, index) => {
          return (
            <CSSTransition
              key={task.id}
              timeout={800}
              classNames={{
                enter: styles.taskEnter,
                enterActive: styles.taskEnterActive,
                exit: styles.taskExit,
                exitActive: styles.taskExitActive,
              }}
            >
              <div className={styles.taskWrapper} key={task.id}>
                <div className={task.isComplete ? styles.done : ''}>
                  <span className={styles.taskNumber}>{index + 1}</span>
                  <span className={styles.taskText}>{task.title}</span>
                </div>
                <div className={styles.buttonWraper}>
                  <button
                    className={cx(styles.button, styles.buttonCompleteTask)}
                    onClick={() => completeTask(task.id)}
                  >
                    {task.isComplete ? 'Uncomplete' : 'Complete'}
                  </button>
                  {task.isComplete ? null : (
                    <button
                      className={cx(styles.button, styles.buttonEditTask)}
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
                    className={cx(styles.button, styles.buttonDeleteTask)}
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </>
  )
}

TaskList.propTypes = {
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
