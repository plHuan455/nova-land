import React from 'react';
import ReactDOM from 'react-dom';

import ReportCard from '.';

describe('<ReportCard />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReportCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
