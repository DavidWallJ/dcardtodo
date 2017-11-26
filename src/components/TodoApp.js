import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
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
		alert('New todo: ' + text);
	};
	handleSearch = (searchInput, showCompleted) => {
		this.setState({
			searchInput: searchInput.toLowerCase(),
			showCompleted
		});
	};
	render() {
		var { todos } = this.state;
		return (
			<Panel header="Dcard Todo Application">
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={todos} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</Panel>
		);
	}
}

export default TodoApp;
