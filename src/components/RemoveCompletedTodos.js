import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import * as actions from '../actions/actions';

class RemoveCompletedTodos extends Component {
	handleOnClick = () => {
		const { todos } = this.props;
		this.props.removeCompletedTodos(todos);
	};

	render() {
		return (
			<Button
				bsStyle="danger"
				onClick={() => {
					this.handleOnClick();
				}}
				block
			>
				Clear Completed Todos
			</Button>
		);
	}
}

function mapStateToProps({ todos }) {
	return { todos };
}

export default connect(mapStateToProps, actions)(RemoveCompletedTodos);
