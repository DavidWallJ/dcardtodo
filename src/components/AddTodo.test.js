import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import AddTodo from './AddTodo';

describe(AddTodo, () => {
	const mockOnAddTodo = jest.fn();
	const component = shallow(<AddTodo onAddTodo={mockOnAddTodo} />);

	it('should exist', () => {
		const component = renderer.create(<AddTodo />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('contains the form', () => {
		expect(component.find('form')).toHaveLength(1);
		expect(component.find('Button')).toHaveLength(1);
		expect(component.find('.todoInput')).toHaveLength(1);
	});

	describe('when typing into the person `todoInput`', () => {
		const todoText = 'Buy milk';

		beforeEach(() => {
			component
				.find('.todoInput')
				.simulate('change', { target: { value: todoText } });
		});

		it('updates the `todoText` value', () => {
			expect(component.state().todoText).toEqual(todoText);
		});

		// it('calls the passed in `onAddTodo` function when add button is clicked', () => {
		// 	component.find('Button').simulate('click');
		// 	expect(mockOnAddTodo).toBeCalled();
		// });
	});
});
