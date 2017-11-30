import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import TodoItem from './TodoItem';

class TodoList extends Component {
	renderTodos = () => {
		const { todos } = this.props;
		if (todos.length === 0) {
			return <p>Nothing Scheduled To Do</p>;
		}
		return todos.map(todo => {
			return (
				<ListGroupItem>
					<TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle} />
				</ListGroupItem>
			);
		});
	};
	render() {
		return (
			<ListGroup>
				{this.renderTodos()}
			</ListGroup>
		);
	}
}

export default TodoList;
