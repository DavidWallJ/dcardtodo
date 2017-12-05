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

export const toggleTodo = id => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};
