import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import NewsCategory from '.';

describe('<NewsCategory />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <NewsCategory
          dataNewsCategory={[]}
          totalPage={0}
        />
      </Router>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
