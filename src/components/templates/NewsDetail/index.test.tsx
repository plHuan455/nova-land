import React from 'react';
import ReactDOM from 'react-dom';

import NewsDetail from '.';

import imgRelatedNews from 'assets/images/News/related-news.png';

const newsDetailData = {
  id: '01',
  title: 'Bến du thuyền - yếu tố vàng gia tăng giá trị bất động sản',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat egestas eu egestas sed viverra urna. Purus accumsan feugiat feugiat nisl pulvinar faucibus eu. Praesent dictum ornare nisl sit donec egestas amet, odio in. Nullam tincidunt at condimentum praesent quis maecenas nulla consequat. Sit convallis molestie feugiat nulla convallis metus interdum. Netus mattis mauris eu magna et enim sed. Arcu morbi congue etiam eget amet faucibus. Dictum ullamcorper aenean tristique at imperdiet proin. Nulla tristique eu nisi viverra. Tempus, ultrices porttitor orci nibh gravida blandit. Amet, massa vulputate ultricies morbi arcu in morbi turpis eleifend. Est blandit nibh posuere elementum. Vel, adipiscing duis mauris pretium, magnis. Nec, nisl, pulvinar viverra morbi',
  createDate: '23/12/2021',
  status: 'Vừa xong',
  imageNews: imgRelatedNews,
  numberView: '111',
  author: 'Theo Robbreport',
  href: '#',
  titleBtn: 'Tìm hiểu thêm Aqua City',
  newsTypes: ['đô thị vệ tinh', 'bến du thuyền'],
};

describe('<NewsDetail />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewsDetail newsDetail={newsDetailData} relatedNews={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
