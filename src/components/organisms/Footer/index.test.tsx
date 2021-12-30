import React from 'react';
import ReactDOM from 'react-dom';

import Footer from '.';

describe('<Footer />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer projectOptions={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});