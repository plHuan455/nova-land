import React from 'react';
import ReactDOM from 'react-dom';

import RelatedRecruitment from '.';

import imgRealed from 'assets/images/Recruitment/img_related-recuitment.png';

describe('<RelatedRecruitment />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <RelatedRecruitment
        imageSrc={imgRealed}
        title="Giám sát Dự án"
        plan="Kế hoạch dự án"
        time="Toàn thời gian"
        href="#"
      />, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
