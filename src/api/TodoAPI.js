const APIFunctions = {
	setTodos(todos) {
		console.log(Array.isArray(todos));
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
	}
};

export default APIFunctions;
