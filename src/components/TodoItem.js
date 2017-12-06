import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodoItem.css';
import { Checkbox, Button, Modal, FormControl } from 'react-bootstrap';
import moment from 'moment';
import * as actions from '../actions/actions';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaCheck from 'react-icons/lib/fa/check';

class TodoItem extends Component {
	constructor() {
		super();

		this.state = {
			showModal: false,
			editTodoInput: 'buy some beer'
		};
	}

	close() {
		const { todos, id } = this.props;
		this.setState({ showModal: false });
		this.props.editTodo(todos, id, this.state.editTodoInput);
	}

	open() {
		this.setState({ showModal: true });
	}

	handleOnChange = () => {
		const { id } = this.props;
		this.props.toggleTodo(id);
	};

	handleOnClick = () => {
		this.setState({ editTodoInput: this.props.text });
		this.open();
		// console.log(this.props.text);
	};

	// when enter is pressed inside edit todo modal the modal will close and the close function will run
	handleKeyPress = target => {
		if (target.charCode == 13) {
			this.close();
		}
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
				<Modal
					show={this.state.showModal}
					onHide={this.close}
					backdrop="static"
					className="editTodoModal"
				>
					<Modal.Body>
						<div className="modalContainer">
							<h4>Todo:</h4>
							<FormControl
								className="editTodoInput"
								type="text"
								value={this.state.editTodoInput}
								onChange={event =>
									this.setState({ editTodoInput: event.target.value })}
								onKeyPress={this.handleKeyPress}
							/>
							<Button
								className="modalCheckButton"
								onClick={this.close.bind(this)}
							>
								<FaCheck />
							</Button>
						</div>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

function mapStateToProps({ todos }) {
	return { todos };
}

export default connect(mapStateToProps, actions)(TodoItem);
