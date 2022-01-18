import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import FeaturedNews from '.';

describe('<FeaturedNews />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <FeaturedNews dataFeaturedNews={[]} />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
