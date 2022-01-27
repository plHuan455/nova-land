import React from 'react';
import ReactDOM from 'react-dom';

import InfoContactRecruitment from '.';

describe('<InfoContactRecruitment />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InfoContactRecruitment />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
