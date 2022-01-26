import React from 'react';
import ReactDOM from 'react-dom';

import AwardList from '.';

describe('<AwardList />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AwardList handleActiveTab={() => ''} title="" desc="" tabsData={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
