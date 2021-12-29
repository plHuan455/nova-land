import React from 'react';
import ReactDOM from 'react-dom';

import FieldActivity from '.';

describe('<FieldActivity />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FieldActivity title="" imgSrc="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
