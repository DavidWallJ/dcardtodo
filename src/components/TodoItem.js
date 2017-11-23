import React, { Component } from 'react';

class TodoItem extends Component {
	render() {
		const { text, id } = this.props;
		return (
			<div>
				<p>
					{id}. {text}
				</p>
			</div>
		);
	}
}

export default TodoItem;
