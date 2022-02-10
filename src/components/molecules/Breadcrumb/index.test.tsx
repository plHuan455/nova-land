import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Breadcrumb from '.';

describe('<Breadcrumb />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Breadcrumb
          breadcrumbs={[]}
        />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
