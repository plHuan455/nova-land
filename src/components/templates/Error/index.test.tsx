import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Error from '.';

describe('<Error />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Error type={404} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
