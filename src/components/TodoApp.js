import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './TodoApp.css';

import uuid from 'node-uuid';
import moment from 'moment';

import TodoAPI from '../api/TodoAPI';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';

class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showCompleted: false,
			searchInput: '',
			todos: TodoAPI.getTodos()
		};
	}

	componentDidUpdate = () => {
		TodoAPI.setTodos(this.state.todos);
	};

	// handleAddTodo = text => {
	// 	this.setState({
	// 		todos: [
	// 			...this.state.todos,
	// 			{
	// 				id: uuid(),
	// 				text,
	// 				completed: false,
	// 				createdAt: moment().unix(),
	// 				completedAt: undefined
	// 			}
	// 		]
	// 	});
	// };

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

	render() {
		const { todos, showCompleted, searchInput } = this.state;
		const filteredTodos = TodoAPI.filterTodos(
			todos,
			showCompleted,
			searchInput
		);
		return (
			<div className="container text-center">
				<div className="row">
					<div className="container">
						<div className="col-sm-10 col-md-6">
							<div className="todoAppContainer">
								<h1>DCard Todo Application</h1>
								<TodoSearch
									onSearch={this.handleSearch}
									onCheckbox={this.handleCheckbox}
									checked={this.state.showCompleted}
								/>
								<TodoList />
								<AddTodo />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TodoApp;
