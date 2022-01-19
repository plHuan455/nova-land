import React from 'react';
import ReactDOM from 'react-dom';

import Section from '.';

describe('<Section />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Section />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
