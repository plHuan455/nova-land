/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Pagination from '.';

describe('<Pagination />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Pagination totalPage={0} handleChangePage={() => console.log()} />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
