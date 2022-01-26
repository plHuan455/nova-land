import React from 'react';
import ReactDOM from 'react-dom';

import FilterRecuitment from '.';

describe('<FilterRecuitment />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterRecuitment />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
