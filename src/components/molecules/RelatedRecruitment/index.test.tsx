import React from 'react';
import ReactDOM from 'react-dom';

import RelatedRecruitment from '.';

describe('<RelatedRecruitment />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RelatedRecruitment />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
