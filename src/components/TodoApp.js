import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import uuid from 'node-uuid';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';

class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showCompleted: false,
			searchInput: '',
			todos: [
				{
					id: uuid(),
					text: 'Talk the talk',
					completed: false
				},
				{
					id: uuid(),
					text: 'Walk the walk',
					completed: true
				}
			]
		};
	}
	handleAddTodo = text => {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text,
					completed: false
				}
			]
		});
	};

	handleSearch = searchInput => {
		console.log('handleSearch: ', searchInput);
		this.setState({
			searchInput: searchInput.toLowerCase()
		});
	};

	handleCheckbox = showCompleted => {
		console.log('handleCheckbox: ', showCompleted);
		this.setState({
			showCompleted: showCompleted
		});
	};

	handleToggle = id => {
		const updatedTodos = this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});

		this.setState({ todos: updatedTodos });
	};

	render() {
		var { todos } = this.state;
		return (
			<Panel header="Dcard Todo Application">
				<TodoSearch
					onSearch={this.handleSearch}
					onCheckbox={this.handleCheckbox}
					checked={this.state.showCompleted}
				/>
				<TodoList todos={todos} onToggle={this.handleToggle} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</Panel>
		);
	}
}

export default TodoApp;
