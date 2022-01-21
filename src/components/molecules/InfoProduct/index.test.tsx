import React from 'react';
import ReactDOM from 'react-dom';

import InfoProduct from '.';

describe('<InfoProduct />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InfoProduct />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
