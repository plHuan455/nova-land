import React from 'react';
import ReactDOM from 'react-dom';

import OutStandingNumber from '.';

describe('<OutStandingNumber />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OutStandingNumber />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
