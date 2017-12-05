import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodoItem.css';
import { Checkbox } from 'react-bootstrap';
import moment from 'moment';
import * as actions from '../actions/actions';

class TodoItem extends Component {
	handleOnChange = () => {
		const { id } = this.props;
		this.props.toggleTodo(id);
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
		const { text, completed, createdAt, completedAt } = this.props;
		return (
			<div className="todoItem">
				<Checkbox onChange={this.handleOnChange.bind(this)} checked={completed}>
					<span className="todoTextSpan">{text}</span> <br />{' '}
					{this.renderDate(createdAt, completedAt, completed)}
				</Checkbox>
			</div>
		);
	}
}

export default connect(null, actions)(TodoItem);
