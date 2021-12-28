import React from 'react';
import ReactDOM from 'react-dom';

import VisionMissionValue from '.';

describe('<VisionMissionValue />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VisionMissionValue dataList={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
