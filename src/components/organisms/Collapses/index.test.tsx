import React from 'react';
import ReactDOM from 'react-dom';

import Collapses from '.';

describe('<Collapses />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Collapses title="" active />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
