import React from 'react';
import ReactDOM from 'react-dom';

import EventCard from '.';

describe('<EventCard />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EventCard
      imgSrc=""
      title="Novaland tiếp tục tổ chức loạt sự kiện nghệ thuật"
      description="Novaland tiếp tục tổ chức chuỗi đêm trình diễn nghệ thuật quy tụ nghệ sĩ nổi tiếng nhằm tri ân..."
      href="/"
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
