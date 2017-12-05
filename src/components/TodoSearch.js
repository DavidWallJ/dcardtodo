import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodoSearch.css';
import { FormGroup, FormControl, Checkbox } from 'react-bootstrap';
import * as actions from '../actions/actions';

class TodoSearch extends Component {
	handleSearch = () => {
		const searchInput = this.searchInput.value;
		this.props.setSearchText(searchInput);
	};

	render() {
		return (
			<form className="todoSearchForm">
				<FormGroup>
					<FormControl
						type="search"
						className="todoSearchInput"
						placeholder="Search"
						inputRef={input => (this.searchInput = input)}
						onChange={this.handleSearch}
					/>
					<div className="showCompletedCheckbox">
						<Checkbox
							onChange={() => {
								this.props.toggleShowCompleted();
							}}
						>
							Show completed todos
						</Checkbox>
					</div>
				</FormGroup>
			</form>
		);
	}
}

export default connect(null, actions)(TodoSearch);
