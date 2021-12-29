import React from 'react';
import ReactDOM from 'react-dom';

import EcoCard from '.';

describe('<EcoCard />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EcoCard brandList={[]} fieldImgSrc="" href="/" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
