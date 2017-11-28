import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TodoApp from './TodoApp';
import TodoList from './TodoList';

describe(TodoApp, () => {
	const component = shallow(<TodoApp />);

	it('should exist', () => {
		const component = renderer.create(<TodoApp />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
