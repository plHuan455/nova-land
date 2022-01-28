import React from 'react';
import ReactDOM from 'react-dom';

import EventList from '.';

describe('<EventList />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EventList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
