import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ShareholderRelations from '.';

describe('<ShareholderRelations />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><ShareholderRelations href="/" title="" dataShareholderRelations={{ title: '' }} /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
