import React from 'react';
import ReactDOM from 'react-dom';

import ProjectListMap from '.';

describe('<ProjectListMap />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectListMap />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
