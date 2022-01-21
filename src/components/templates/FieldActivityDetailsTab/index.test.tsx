import React from 'react';
import ReactDOM from 'react-dom';

import FieldActivityDetailsTab from '.';

describe('<FieldActivityDetailsTab />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FieldActivityDetailsTab />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
