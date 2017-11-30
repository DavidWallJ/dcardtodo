import React, { Component } from 'react';
import './TodoSearch.css';
import { Button, FormGroup, FormControl, Checkbox } from 'react-bootstrap';

class TodoSearch extends Component {
	handleSearch = () => {
		const searchInput = this.searchInput.value;
		// passed down from parent component
		this.props.onSearch(searchInput);
	};

	handleCheckbox = e => {
		const showCompleted = e.target.checked;
		// passed down from parent component
		this.props.onCheckbox(showCompleted);
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
							checked={this.props.checked}
							onChange={this.handleCheckbox}
						>
							Show completed todos
						</Checkbox>
					</div>
				</FormGroup>
			</form>
		);
	}
}

export default TodoSearch;
