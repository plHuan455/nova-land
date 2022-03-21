import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import LatestNews from '.';

describe('<LatestNews />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><LatestNews dataLatestNews={[]} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
