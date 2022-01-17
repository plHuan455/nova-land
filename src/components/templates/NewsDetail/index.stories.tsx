import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import NewsDetail from '.';

import imgRelatedNews from 'assets/images/News/related-news.png';

export default {
  title: 'Components/templates/NewsDetail',
  component: NewsDetail,
  argTypes: {},
} as Meta;

const newsDetailData = {
  newsDetail: {
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
  },
  relatedNews: [
    {
      id: '02',
      title: 'Bến du thuyền - yếu tố vàng gia tăng giá trị bất động sản',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat egestas eu egestas sed viverra urna. Purus accumsan feugiat feugiat nisl pulvinar faucibus eu. Praesent dictum ornare nisl sit donec egestas amet, odio in. Nullam tincidunt at condimentum praesent quis maecenas nulla consequat. Sit convallis molestie feugiat nulla convallis metus interdum. Netus mattis mauris eu magna et enim sed. Arcu morbi congue etiam eget amet faucibus. Dictum ullamcorper aenean tristique at imperdiet proin. Nulla tristique eu nisi viverra. Tempus, ultrices porttitor orci nibh gravida blandit. Amet, massa vulputate ultricies morbi arcu in morbi turpis eleifend. Est blandit nibh posuere elementum. Vel, adipiscing duis mauris pretium, magnis. Nec, nisl, pulvinar viverra morbi',
      createDate: '23/12/2021',
      status: 'Vừa xong',
      imageNews: imgRelatedNews,
      numberView: '111',
      author: 'Theo Robbreport',
      href: '#',
      newsTypes: ['đô thị vệ tinh', 'bến du thuyền'],
    },
    {
      id: '03',
      title: 'Bến du thuyền - yếu tố vàng gia tăng giá trị bất động sản',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat egestas eu egestas sed viverra urna. Purus accumsan feugiat feugiat nisl pulvinar faucibus eu. Praesent dictum ornare nisl sit donec egestas amet, odio in. Nullam tincidunt at condimentum praesent quis maecenas nulla consequat. Sit convallis molestie feugiat nulla convallis metus interdum. Netus mattis mauris eu magna et enim sed. Arcu morbi congue etiam eget amet faucibus. Dictum ullamcorper aenean tristique at imperdiet proin. Nulla tristique eu nisi viverra. Tempus, ultrices porttitor orci nibh gravida blandit. Amet, massa vulputate ultricies morbi arcu in morbi turpis eleifend. Est blandit nibh posuere elementum. Vel, adipiscing duis mauris pretium, magnis. Nec, nisl, pulvinar viverra morbi',
      createDate: '23/12/2021',
      status: 'Vừa xong',
      imageNews: imgRelatedNews,
      numberView: '111',
      author: 'Theo Robbreport',
      href: '#',
      newsTypes: ['đô thị vệ tinh', 'bến du thuyền'],
    },
    {
      id: '04',
      title: 'Bến du thuyền - yếu tố vàng gia tăng giá trị bất động sản',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat egestas eu egestas sed viverra urna. Purus accumsan feugiat feugiat nisl pulvinar faucibus eu. Praesent dictum ornare nisl sit donec egestas amet, odio in. Nullam tincidunt at condimentum praesent quis maecenas nulla consequat. Sit convallis molestie feugiat nulla convallis metus interdum. Netus mattis mauris eu magna et enim sed. Arcu morbi congue etiam eget amet faucibus. Dictum ullamcorper aenean tristique at imperdiet proin. Nulla tristique eu nisi viverra. Tempus, ultrices porttitor orci nibh gravida blandit. Amet, massa vulputate ultricies morbi arcu in morbi turpis eleifend. Est blandit nibh posuere elementum. Vel, adipiscing duis mauris pretium, magnis. Nec, nisl, pulvinar viverra morbi',
      createDate: '23/12/2021',
      status: 'Vừa xong',
      imageNews: imgRelatedNews,
      numberView: '111',
      author: 'Theo Robbreport',
      href: '#',
      newsTypes: ['đô thị vệ tinh', 'bến du thuyền'],
    },
    {
      id: '05',
      title: 'Bến du thuyền - yếu tố vàng gia tăng giá trị bất động sản',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat egestas eu egestas sed viverra urna. Purus accumsan feugiat feugiat nisl pulvinar faucibus eu. Praesent dictum ornare nisl sit donec egestas amet, odio in. Nullam tincidunt at condimentum praesent quis maecenas nulla consequat. Sit convallis molestie feugiat nulla convallis metus interdum. Netus mattis mauris eu magna et enim sed. Arcu morbi congue etiam eget amet faucibus. Dictum ullamcorper aenean tristique at imperdiet proin. Nulla tristique eu nisi viverra. Tempus, ultrices porttitor orci nibh gravida blandit. Amet, massa vulputate ultricies morbi arcu in morbi turpis eleifend. Est blandit nibh posuere elementum. Vel, adipiscing duis mauris pretium, magnis. Nec, nisl, pulvinar viverra morbi',
      createDate: '23/12/2021',
      status: 'Vừa xong',
      imageNews: imgRelatedNews,
      numberView: '111',
      author: 'Theo Robbreport',
      href: '#',
      newsTypes: ['đô thị vệ tinh', 'bến du thuyền'],
    },
  ],
};

export const normal: Story = () => (
  <Router>
    <NewsDetail newsDetail={newsDetailData.newsDetail} relatedNews={newsDetailData.relatedNews} />
  </Router>
);
