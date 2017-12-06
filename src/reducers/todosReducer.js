import uuid from 'node-uuid';
import moment from 'moment';

export default function(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: uuid(),
					text: action.text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			];

		case 'TOGGLE_TODO':
			return state.map(todo => {
				if (todo.id === action.id) {
					var toggledCompleted = !todo.completed;
					return {
						...todo,
						completed: toggledCompleted,
						completedAt: toggledCompleted ? moment().unix() : undefined
					};
				} else {
					return todo;
				}
			});

		case 'ADD_TODOS':
			return [...state, ...action.todos];

		case 'REMOVE_COMPLETED_TODOS':
			const uncompletedTodos = action.todos.filter(todo => {
				// if todo.completed === false continue to show the todo OR if showCompleted === true continue to show todo
				return !todo.completed;
			});
			return [...uncompletedTodos];

		case 'EDIT_TODO':
			const editedTodos = action.todos.map(todo => {
				const { text, id } = action;
				if (todo.id === action.id) {
					return {
						...todo,
						text,
						id
					};
				} else {
					return todo;
				}
			});

			return [...editedTodos];

		default:
			return state;
	}
}
