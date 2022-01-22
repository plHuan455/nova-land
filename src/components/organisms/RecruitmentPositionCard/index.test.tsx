import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import RecruitmentPositionCard from '.';

describe('<RecruitmentPositionCard />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <RecruitmentPositionCard
          breadcrumbsRecruitment={[]}
          title=""
          desc=""
          expirationDate=""
          href=""
        />
      </Router>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
