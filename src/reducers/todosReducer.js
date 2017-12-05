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

		default:
			return state;
	}
}
