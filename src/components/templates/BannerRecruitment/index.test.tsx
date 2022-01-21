import React from 'react';
import ReactDOM from 'react-dom';

import BannerRecruitment from '.';

describe('<BannerRecruitment />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BannerRecruitment />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
