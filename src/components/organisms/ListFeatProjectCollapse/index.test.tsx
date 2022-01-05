import React from 'react';
import ReactDOM from 'react-dom';

import ListFeatProjectCollapse from '.';

describe('<ListFeatProjectCollapse />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListFeatProjectCollapse indexActive={0} list={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
