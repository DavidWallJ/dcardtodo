import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Checkbox } from 'react-bootstrap';

class TodoSearch extends Component {
	handleSearch = e => {
		const searchInput = this.searchInput.value;
		const showCompleted = e.target.checked;
		console.log(searchInput, showCompleted);
		// passed down from parent component
		this.props.onSearch(searchInput, showCompleted);
	};

	render() {
		return (
			<form>
				<FormGroup>
					<FormControl
						type="search"
						placeholder="Search"
						inputRef={input => (this.searchInput = input)}
						onChange={this.handleSearch}
					/>
					<Checkbox
						checked={this.props.checked}
						// inputRef={input => (this.showCompleted = input)}
						onChange={this.handleSearch}
					>
						Show completed todos
					</Checkbox>
				</FormGroup>
			</form>
		);
	}
}

export default TodoSearch;
