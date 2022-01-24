import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import InfoNews from '.';

import imgRelatedNews from 'assets/images/News/related-news.png';

describe('<InfoNews />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <InfoNews
          imageSrc={imgRelatedNews}
          title="Aqua City - không gian xanh lý tưởng cho sức khỏe và gắn kết..."
          status="Vừa xong"
          href="#"
        />
      </Router>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
