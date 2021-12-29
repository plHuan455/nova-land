import React from 'react';
import ReactDOM from 'react-dom';

import Banner from '.';

describe('<Banner />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Banner src="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
