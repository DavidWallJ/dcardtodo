import React, { Component } from 'react';
import './TodoItem.css';
import { Checkbox } from 'react-bootstrap';
import moment from 'moment';

class TodoItem extends Component {
	handleOnClick = () => {
		this.props.onToggle(this.props.id);
	};

	renderDate = (createdAt, completedAt, completed) => {
		let message = 'Created: ';
		let timestamp = createdAt;

		if (completed) {
			message = 'Completed: ';
			timestamp = completedAt;
		}

		return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
	};
	render() {
		const { text, id, completed, createdAt, completedAt } = this.props;
		return (
			<div className="todoItem">
				<Checkbox onChange={this.handleOnClick} checked={completed}>
					<span className="todoTextSpan">{text}</span> <br />{' '}
					{this.renderDate(createdAt, completedAt, completed)}
				</Checkbox>
			</div>
		);
	}
}

export default TodoItem;
