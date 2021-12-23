import React from 'react';
import ReactDOM from 'react-dom';

import Icon from '.';

describe('<Icon />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Icon size="14" iconName="facebook" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
