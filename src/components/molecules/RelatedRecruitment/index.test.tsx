import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import RelatedRecruitment from '.';

import imgRealed from 'assets/images/Recruitment/img_related-recuitment.png';

describe('<RelatedRecruitment />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <RelatedRecruitment
          imageSrc={imgRealed}
          title="Giám sát Dự án"
          plan="Kế hoạch dự án"
          time="Toàn thời gian"
          href="#"
        />
      </Router>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
