import React, { Component } from 'react';
import './TodoApp.css';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';

class TodoApp extends Component {
	render() {
		return (
			<div className="container text-center">
				<div className="row">
					<div className="container">
						<div className="col-sm-10 col-md-6">
							<div className="todoAppContainer">
								<h1>DCard Todo Application</h1>
								<TodoSearch />
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
