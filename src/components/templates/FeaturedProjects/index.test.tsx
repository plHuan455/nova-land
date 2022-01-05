import React from 'react';
import ReactDOM from 'react-dom';

import FeaturedProjects from '.';

describe('<FeaturedProjects />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeaturedProjects title="" featuredProjectList={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
