import React from 'react';
import ReactDOM from 'react-dom';

import EventItem from '.';

describe('<EventItem />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EventItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
