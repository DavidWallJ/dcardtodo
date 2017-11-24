import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//testing
import HelloWorldList from './HelloWorldList';

import TodoApp from './components/TodoApp';

class App extends Component {
	render() {
		return (
			<div>
				<TodoApp />
				<HelloWorldList />
			</div>
		);
	}
}

export default App;
