import redux from 'redux';
import {
	searchTextReducer,
	toggleShowCompletedReducer,
	todosReducer
} from 'reducers';

export const configure = () => {
	var reducers = redux.combineReducers({
		searchText: searchTextReducer,
		toggleShowCompleted: toggleShowCompletedReducer,
		todos: todosReducer
	});

  var.store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.defToolsExtension(): f => f
  ));
};
