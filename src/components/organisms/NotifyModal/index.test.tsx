/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

import NotifyModal from '.';

describe('<NotifyModal />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotifyModal
      handleClose={() => console.log('zppp')}
      isOpen
      title=""
      message=""
      btnText="Đóng"
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
