import React from 'react';
import ReactDOM from 'react-dom';

import ProductLines from '.';

describe('<ProductLines />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductLines />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
