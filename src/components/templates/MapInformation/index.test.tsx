import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import MapInformation from '.';

describe('<MapInformation />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <MapInformation
          mapAPIkey=""
          mapMarker={{
            lat: 0,
            lng: 0,
            dataMarker: {
              title: '',
              dataCard: [],
            },
          }}
        />
      </Router>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
