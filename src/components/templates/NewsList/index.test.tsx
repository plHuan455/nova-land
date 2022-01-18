import React from 'react';
import ReactDOM from 'react-dom';

import NewsList from '.';

describe('<NewsList />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewsList title="" dataNewsList={[]} btnName="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
