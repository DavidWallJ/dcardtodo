export default function(state = '', action) {
	switch (action.type) {
		case 'SET_SEARCH_TEXT':
			return action.searchInput;
		default:
			return state;
	}
}
