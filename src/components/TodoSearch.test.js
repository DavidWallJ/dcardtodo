import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TodoSearch from './TodoSearch';

describe(TodoSearch, () => {
	const searchText = 'Buy Milk';
	const mockOnSearch = jest.fn();
	const component = shallow(<TodoSearch onSearch={mockOnSearch} />);

	it('should exist', () => {
		const component = renderer.create(<TodoSearch />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('contains the form', () => {
		expect(component.find('form')).toHaveLength(1);
		expect(component.find('Checkbox')).toHaveLength(1);
		expect(component.find('.todoSearchInput')).toHaveLength(1);
	});
});
