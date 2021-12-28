import React from 'react';
import ReactDOM from 'react-dom';

import DevelopmentHistory from '.';

describe('<DevelopmentHistory />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DevelopmentHistory />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
