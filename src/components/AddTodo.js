import React, { Component } from 'react';
import './AddTodo.css';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

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
			this.props.onAddTodo(this.state.todoText);
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
						placeholder="...add your todo here"
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

export default AddTodo;
