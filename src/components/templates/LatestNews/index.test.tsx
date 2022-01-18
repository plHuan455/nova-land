import React from 'react';
import ReactDOM from 'react-dom';

import LatestNews from '.';

describe('<LatestNews />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LatestNews dataLatestNews={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
