import React from 'react';
import ReactDOM from 'react-dom';

import StockInformation from '.';

describe('<StockInformation />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StockInformation />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
