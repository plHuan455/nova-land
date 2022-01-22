import React from 'react';
import ReactDOM from 'react-dom';

import FilterGroup from '.';

describe('<FilterGroup />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterGroup title="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
