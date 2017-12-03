import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import TodoApp from './components/TodoApp';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
