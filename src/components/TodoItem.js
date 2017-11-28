import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';

class TodoItem extends Component {
	handleOnClick = () => {
		this.props.onToggle(this.props.id);
	};
	render() {
		const { text, id, completed } = this.props;
		return (
			<div onClick={this.handleOnClick}>
				<Checkbox checked={completed}>
					{text}
				</Checkbox>
			</div>
		);
	}
}

export default TodoItem;
