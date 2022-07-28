import React from 'react';
import ReactDOM from 'react-dom';

import CalendarEvent from '.';

describe('<CalendarEvent />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CalendarEvent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
