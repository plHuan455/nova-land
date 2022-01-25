import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HomeNews from '.';

describe('<HomeNews />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <HomeNews title="" tabDataHomeNews={[]} href="/" />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
