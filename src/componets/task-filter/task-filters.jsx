import React from 'react'
import PropTypes from 'prop-types'
import { filters } from '../app/App.jsx'
import styles from './task-filter.module.scss'

export const FilterButtons = ({ filterValue, setFilterValue }) => {
  return (
    <div className={styles.sortButtonWrapper}>
      <button
        className={`${styles.filterButton} ${
          filterValue === filters.all ? styles.buttonSelected : ''
        }`}
        onClick={() => setFilterValue(filters.all)}
      >
        All tasks
      </button>
      <button
        className={`${styles.filterButton} ${
          filterValue === filters.completed ? styles.buttonSelected : ''
        }`}
        onClick={() => setFilterValue(filters.completed)}
      >
        Completed
      </button>
      <button
        className={`${styles.filterButton} ${
          filterValue === filters.active ? styles.buttonSelected : ''
        }`}
        onClick={() => setFilterValue(filters.active)}
      >
        Active
      </button>
    </div>
  )
}

FilterButtons.propTypes = {
  filterValue: PropTypes.string.isRequired,
  setFilterValue: PropTypes.string.isRequired,
}
