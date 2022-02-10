import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import MapInformation from '.';

describe('<MapInformation />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <MapInformation mapAPIkey="" mapMarker={[]} />
      </Router>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
