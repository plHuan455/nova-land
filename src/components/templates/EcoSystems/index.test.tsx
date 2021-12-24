import React from 'react';
import ReactDOM from 'react-dom';

import EcoSystems from '.';

describe('<EcoSystems />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EcoSystems />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
