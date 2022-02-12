import React from 'react';
import ReactDOM from 'react-dom';

import EventList from '.';

describe('<EventList />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EventList
      eventList={[]}
      totalPage={10}
      // eslint-disable-next-line no-console
      handleGetPage={(p) => console.log(p)}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
