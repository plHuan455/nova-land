import React from 'react';
import ReactDOM from 'react-dom';

import BannerRecruitmentDetail from '.';

describe('<BannerRecruitmentDetail />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BannerRecruitmentDetail />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
