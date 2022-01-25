import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import RecruitmentPositionList from '.';

describe('<RecruitmentPositionList />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <RecruitmentPositionList
          totalResults={0}
          dataRecruitmentPositionList={[]}
          totalPage={0}
        />
      </Router>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
