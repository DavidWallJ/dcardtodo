export const setSearchText = searchInput => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchInput
	};
};

export const toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
};

export const addTodo = text => {
	return {
		type: 'ADD_TODO',
		text
	};
};

export const addTodos = todos => {
	return {
		type: 'ADD_TODOS',
		todos
	};
};

export const toggleTodo = id => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

export const removeCompletedTodos = todos => {
	return {
		type: 'REMOVE_COMPLETED_TODOS',
		todos
	};
};

export const editTodo = (todos, id, text) => {
	return {
		type: 'EDIT_TODO',
		todos,
		id,
		text
	};
};
