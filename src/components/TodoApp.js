import React, { Component } from 'react';
import './TodoApp.css';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import RemoveCompletedTodos from './RemoveCompletedTodos';

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
								<hr />
								<TodoList />
								<AddTodo />
								<RemoveCompletedTodos />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TodoApp;
