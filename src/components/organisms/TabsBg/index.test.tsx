import React from 'react';
import ReactDOM from 'react-dom';

import { TabsBg } from '.';

describe('<TabsBg />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TabsBg />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
