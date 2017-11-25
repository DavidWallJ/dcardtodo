import React, { Component } from 'react';

class AddTodo extends Component {
	handleSubmit = e => {
		e.preventDefault();
		const todoText = this.refs.todoText.value;

		if (todoText.length > 0) {
			this.refs.todoText.value = '';
			this.props.onAddTodo(todoText);
		} else {
			// puts cursor back in text input field if no text exists on submit
			this.refs.todoText.focus();
		}
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" ref="todoText" placeholder="...add your todo here" />
				<button className="button expanded">Add Todo</button>
			</form>
		);
	}
}

export default AddTodo;
