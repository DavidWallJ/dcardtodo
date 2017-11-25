import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TodoItem from './TodoItem';

describe(TodoItem, () => {
	const component = shallow(<TodoItem />);

	it('should exist', () => {
		const component = renderer.create(<TodoItem />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
