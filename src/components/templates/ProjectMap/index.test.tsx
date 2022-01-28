import React from 'react';
import ReactDOM from 'react-dom';

import ProjectMap from '.';

describe('<ProjectMap />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectMap handleSelect={() => {}} idActive={5} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
