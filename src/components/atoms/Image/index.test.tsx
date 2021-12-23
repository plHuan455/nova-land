import React from 'react';
import ReactDOM from 'react-dom';

import Image from '.';

describe('<Image />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image src="" alt="" ratio="1x1" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
