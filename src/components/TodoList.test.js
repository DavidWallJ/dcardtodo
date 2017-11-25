import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TodoList from './TodoList';
import TodoItem from './TodoItem';

describe(TodoList, () => {
	const todos = [
		{
			id: 1,
			text: 'Walk the walk'
		},
		{
			id: 2,
			text: 'Talk the talk'
		},
		{
			id: 3,
			text: 'Walk the cat'
		}
	];
	const component = shallow(<TodoList todos={todos} />);

	it('should exist', () => {
		const component = renderer.create(<TodoList todos={todos} />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('contains the same number of `TodoItem` components as items in `todos` array', () => {
		const todoItems = component.find(TodoItem).length;
		const todosCount = todos.length;
		expect(todoItems).toEqual(todosCount);
	});
});
