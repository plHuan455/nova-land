import React from 'react';
import ReactDOM from 'react-dom';

import HomeNews from '.';

describe('<HomeNews />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomeNews title="" tabDataHomeNews={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
