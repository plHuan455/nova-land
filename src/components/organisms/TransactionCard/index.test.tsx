import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import TransactionCard from '.';

describe('<TransactionCard />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <TransactionCard
          imgSrc=""
          title=""
          location=""
          href=""
        />
      </Router>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
