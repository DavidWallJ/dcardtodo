import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component {
	renderTodos = () => {
		const { todos } = this.props;
		return todos.map(todo => {
			return (
				<TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle} />
			);
		});
	};
	render() {
		return (
			<div>
				{this.renderTodos()}
			</div>
		);
	}
}

export default TodoList;
