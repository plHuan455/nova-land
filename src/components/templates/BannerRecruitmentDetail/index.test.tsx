import React from 'react';
import ReactDOM from 'react-dom';

import BannerRecruitmentDetail from '.';

describe('<BannerRecruitmentDetail />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BannerRecruitmentDetail
      location="Ho Chi Minh, City"
      plan="Kế Hoạch Dự Án"
      time="Toàn thời gian"
      title="Quản lý Điều hành Dự án"
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
