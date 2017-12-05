import { combineReducers } from 'redux';
import searchTextReducer from './searchTextReducer';
import toggleShowCompletedReducer from './toggleShowCompletedReducer';
import todosReducer from './todosReducer';

export default combineReducers({
	searchInput: searchTextReducer,
	toggleShowCompleted: toggleShowCompletedReducer,
	todos: todosReducer
});
