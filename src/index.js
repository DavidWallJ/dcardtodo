import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import TodoApp from './components/TodoApp';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import { addTodos } from './actions/actions';

import TodoAPI from './api/TodoAPI';

const store = createStore(reducers);

store.subscribe(() => {
	var state = store.getState();
	TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(addTodos(initialTodos));

ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
