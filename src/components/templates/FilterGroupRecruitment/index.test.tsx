import React from 'react';
import ReactDOM from 'react-dom';

import FilterGroupRecruitment from '.';

describe('<FilterGroupRecruitment />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterGroupRecruitment titleMain="" dataFilterList={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
