import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './TodoItem.css';
import { Checkbox, Button, Modal, FormControl } from 'react-bootstrap';
import moment from 'moment';
import * as actions from '../actions/actions';
import FaPencil from 'react-icons/lib/fa/pencil';

class TodoItem extends Component {
	constructor() {
		super();

		this.state = {
			showModal: false,
			editTodoInput: 'buy some beer'
		};
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	handleOnChange = () => {
		const { id } = this.props;
		this.props.toggleTodo(id);
	};

	handleOnClick = () => {
		this.open();
		console.log(this.props.text);
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
				<div className="todoItemLeft">
					<Checkbox onChange={this.handleOnChange} checked={completed}>
						<span className="todoTextSpan">{text}</span>
						<br /> {this.renderDate(createdAt, completedAt, completed)}
					</Checkbox>
				</div>
				<div className="todoItemRight">
					<Button onClick={this.handleOnClick.bind(this)}>
						<FaPencil />
					</Button>
				</div>
				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header>
						<Modal.Title>Edit Todo</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FormControl
							className="editTodoInput"
							type="text"
							value={this.state.editTodoInput}
							onChange={event =>
								this.setState({ editTodoInput: event.target.value })}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close.bind(this)}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default connect(null, actions)(TodoItem);
