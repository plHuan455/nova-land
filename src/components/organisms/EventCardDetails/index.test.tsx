import React from 'react';
import ReactDOM from 'react-dom';

import EventCardDetails from '.';

describe('<EventCardDetails />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EventCardDetails />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
