import React, { Component } from 'react';

import TodoList from './TodoList';
class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					text: 'Talk the talk'
				},
				{
					id: 2,
					text: 'Walk the walk'
				},
				{
					id: 3,
					text: 'Water the cat'
				},
				{
					id: 4,
					text: 'Buy water for cat'
				}
			]
		};
	}
	render() {
		var { todos } = this.state;
		return <TodoList todos={todos} />;
	}
}

export default TodoApp;
