import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import GallerySlide from '.';

describe('<GallerySlide />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <GallerySlide
          title=""
          desc=""
          href=""
          imgList={[]}
        />
      </Router>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
