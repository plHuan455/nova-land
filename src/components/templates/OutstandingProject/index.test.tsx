import React from 'react';
import ReactDOM from 'react-dom';

import OutstandingProject from '.';

describe('<OutstandingProject />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OutstandingProject title="" outstandingProjectList={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
