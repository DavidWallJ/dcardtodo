import React, { Component } from 'react';
import { connect } from 'react-redux';
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
				<ListGroupItem key={todo.id}>
					<TodoItem {...todo} />
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

function mapStateToProps({ todos }) {
	return { todos };
}

export default connect(mapStateToProps)(TodoList);
