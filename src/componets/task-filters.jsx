import { filters } from "../App.js";

export const SorttingButtons = ({filterValue, setFilterValue}) => {
	return(
		<div className="sort-button-wrapper">
			<button
				className={`filter-button ${filterValue === filters.all ? 'button-selected' : ''}`}
				onClick={ () => setFilterValue(filters.all)
				}
				> All tasks
			</button>
			<button
				className={`filter-button ${filterValue === filters.completed ? 'button-selected' : ''}`}
				onClick={ () => setFilterValue(filters.completed)}
				> Completed
			</button>
			<button
				className={`filter-button ${filterValue === filters.active ? 'button-selected' : ''}`}
				onClick={ () => setFilterValue(filters.active)} 
				> Active
			</button>
		</div>
	)
};





