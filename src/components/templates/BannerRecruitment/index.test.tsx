import React from 'react';
import ReactDOM from 'react-dom';

import BannerRecruitment from '.';

import RecruitmentBanner from 'assets/images/recruitment-banner.png';

describe('<BannerRecruitment />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BannerRecruitment
      imageSrc={RecruitmentBanner}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
