import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import EcoCard from '.';

describe('<EcoCard />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><EcoCard brandImage="" fieldImgSrc="" href="/" /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
