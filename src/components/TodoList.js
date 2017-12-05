import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import TodoItem from './TodoItem';
import TodoAPI from '../api/TodoAPI';

class TodoList extends Component {
	renderTodos = () => {
		const { todos, toggleShowCompleted, searchInput } = this.props;
		if (todos.length === 0) {
			return <p>Nothing Scheduled To Do</p>;
		}
		return TodoAPI.filterTodos(
			todos,
			toggleShowCompleted,
			searchInput
		).map(todo => {
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

function mapStateToProps({ todos, toggleShowCompleted, searchInput }) {
	return { toggleShowCompleted, searchInput, todos };
}

export default connect(mapStateToProps)(TodoList);
