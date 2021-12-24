import React from 'react';
import ReactDOM from 'react-dom';

import TransportationInfrastructure from '.';

describe('<TransportationInfrastructure />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TransportationInfrastructure />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
