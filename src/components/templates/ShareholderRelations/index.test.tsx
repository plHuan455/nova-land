import React from 'react';
import ReactDOM from 'react-dom';

import ShareholderRelations from '.';

describe('<ShareholderRelations />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShareholderRelations href="/" title="" dataShareholderRelations={{ title: '' }} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
