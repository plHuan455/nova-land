import React from 'react';
import ReactDOM from 'react-dom';

import Leadership from '.';

describe('<Leadership />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Leadership handleChangeTab={()=>""} title="" tabDataLeadership={[]} hasButtonViewAll />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
