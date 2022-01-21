import React from 'react';
import ReactDOM from 'react-dom';

import ListLogoProject from '.';

describe('<ListLogoProject />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListLogoProject />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
