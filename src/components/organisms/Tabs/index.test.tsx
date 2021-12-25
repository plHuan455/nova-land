import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line import/no-named-as-default
import Tabs from '.';

describe('<Tabs />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
