import React from 'react';
import ReactDOM from 'react-dom';

import RecruitmentDetail from '.';

describe('<RecruitmentDetail />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RecruitmentDetail />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
