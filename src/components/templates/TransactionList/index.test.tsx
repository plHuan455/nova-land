import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import TransactionList from '.';

describe('<TransactionList />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <TransactionList
          title=""
          dataTransactionList={[]}
          totalPage={0}
        />
      </Router>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
