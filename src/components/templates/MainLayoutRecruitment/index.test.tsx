import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import MainLayoutRecruitment from '.';

describe('<MainLayoutRecruitment />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <MainLayoutRecruitment />
      </Router>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
