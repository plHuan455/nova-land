import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import CorporateGovernance from '.';

describe('<CorporateGovernance />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <CorporateGovernance
          dataGeneral={[]}
          dataTabGeneral={[]}
          tabActive={0}
        />
      </Router>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
