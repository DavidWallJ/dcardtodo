import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddTodo.css';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import * as actions from '../actions/actions';

class AddTodo extends Component {
	constructor() {
		super();

		this.state = { todoText: '' };
	}

	handleSubmit = e => {
		e.preventDefault();

		if (this.state.todoText.length > 0) {
			this.setState({ todoText: '' });
			this.todoTextRef.value = '';
			this.props.addTodo(this.state.todoText);
		} else {
			// puts cursor back in text input field if no text exists on submit
			this.todoTextRef.focus();
		}
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<FormGroup>
					<FormControl
						className="todoInput"
						type="text"
						placeholder="Add your todo here..."
						onChange={event => this.setState({ todoText: event.target.value })}
						// ref to move cursor back to if field is empty when submitted
						inputRef={input => (this.todoTextRef = input)}
					/>
					<Button bsStyle="primary" bsSize="large" type="submit" block>
						Add Todo
					</Button>
				</FormGroup>
			</form>
		);
	}
}

export default connect(null, actions)(AddTodo);
