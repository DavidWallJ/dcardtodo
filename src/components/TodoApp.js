import React, { Component } from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';

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
	handleAddTodo = text => {
		console.log(text);
		alert('new todo: ' + text);
	};
	render() {
		var { todos } = this.state;
		return (
			<div>
				<TodoList todos={todos} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
}

export default TodoApp;
