import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Checkbox } from 'react-bootstrap';

class TodoSearch extends Component {
	constructor() {
		super();
		this.state = { checkboxChecked: false };
	}

	handleSearch = () => {
		const searchInput = this.searchInput.value;
		const showCompleted = this.state.checkboxChecked;

		// passed down from parent component
		this.props.onSearch(searchInput, showCompleted);
	};

	handleCheckbox(e) {
		this.setState({ checkboxChecked: e.target.checked });
	}

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
						checked={this.state.checkboxChecked}
						// inputRef={input => (this.showCompleted = input)}
						onChange={this.handleCheckbox.bind(this)}
					>
						Show completed todos
					</Checkbox>
				</FormGroup>
			</form>
		);
	}
}

export default TodoSearch;
