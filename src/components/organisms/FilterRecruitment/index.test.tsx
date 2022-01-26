import React from 'react';
import ReactDOM from 'react-dom';

import FilterRecruitment from '.';

describe('<FilterRecruitment />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterRecruitment />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
