const APIFunctions = {
	setTodos(todos) {
		if (Array.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			// return original array if if fails
			return todos;
		}
	},

	getTodos() {
		const stringTodos = localStorage.getItem('todos');
		let todos = [];

		try {
			todos = JSON.parse(stringTodos);
		} catch (e) {
			// stick with default array
		}

		// insure we actaully have an array and not any malicious code
		return Array.isArray(todos) ? todos : [];
	},

	filterTodos(todos, showCompleted, searchInput) {
		var filteredTodos = todos;
		// filter by showCompleted
		filteredTodos = filteredTodos.filter(todo => {
			// if todo.completed === false continue to show the todo OR if showCompleted === true continue to show todo
			return !todo.completed || showCompleted;
		});
		// filter by searchText
		filteredTodos = filteredTodos.filter(todo => {
			const text = todo.text.toLowerCase();
			return searchInput.length === 0 || todo.text.indexOf(searchInput) > -1;
		});
		// sort todos with non-completed first
		filteredTodos.sort((a, b) => {
			// if a is not completed and b is completed a should come before b
			if (!a.completed && b.completed) {
				return -1;
				// if a is completed and b isn't completed b should come before b
			} else if (a.completed && !b.completed) {
				return 1;
			} else {
				// a is equal to b and thus, no reason to sort
				return 0;
			}
		});
		return filteredTodos;
	},

	deleteCompletedTodos(todos) {
		var filteredTodos = todos;
		// filter by showCompleted
		filteredTodos = filteredTodos.filter(todo => {
			// if todo.completed === false continue to show the todo OR if showCompleted === true continue to show todo
			return todo.completed;
		});

		return filteredTodos;
	}
};

export default APIFunctions;
