import React from 'react';
import ReactDOM from 'react-dom';

import DatePicker from '.';

describe('<DatePicker />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DatePicker />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
