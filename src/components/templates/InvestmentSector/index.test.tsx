import React from 'react';
import ReactDOM from 'react-dom';

import InvestmentSector from '.';

describe('<InvestmentSector />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InvestmentSector title="" investmentSectorList={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
