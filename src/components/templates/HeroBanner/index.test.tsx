import React from 'react';
import ReactDOM from 'react-dom';

import HeroBanner from '.';

describe('<HeroBanner />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeroBanner list={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
