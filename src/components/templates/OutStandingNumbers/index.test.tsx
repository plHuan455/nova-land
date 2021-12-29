import React from 'react';
import ReactDOM from 'react-dom';

import OutStandingNumbers from '.';

describe('<OutStandingNumbers />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OutStandingNumbers dataList={[]} title="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
