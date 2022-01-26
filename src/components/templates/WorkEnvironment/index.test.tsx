import React from 'react';
import ReactDOM from 'react-dom';

import WorkEnvironment from '.';

describe('<WorkEnvironment />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WorkEnvironment />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
