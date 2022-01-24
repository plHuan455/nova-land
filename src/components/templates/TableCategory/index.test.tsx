import React from 'react';
import ReactDOM from 'react-dom';

import TableCategory from '.';

describe('<TableCategory />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TableCategory />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
