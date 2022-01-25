import React from 'react';
import ReactDOM from 'react-dom';

import CorporateGovernance from '.';

describe('<CorporateGovernance />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CorporateGovernance />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
