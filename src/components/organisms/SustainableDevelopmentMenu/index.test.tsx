import React from 'react';
import ReactDOM from 'react-dom';

import SustainableDevelopmentMenu from '.';

describe('<SustainableDevelopmentMenu />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SustainableDevelopmentMenu />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
