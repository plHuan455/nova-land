import { Story, Meta } from '@storybook/react';
import React from 'react';

import HomeNews, { HomeNewsCard, dataTabsType } from '.';

import imgHomeNewsCard from 'assets/images/HomeNews/img_homeNewsCard.png';
import imgHomeNewsCard2 from 'assets/images/HomeNews/img_homeNewsCard2.png';
import imgHomeNewsCard3 from 'assets/images/HomeNews/img_homeNewsCard3.png';
import imgHomeNewsCard4 from 'assets/images/HomeNews/img_homeNewsCard4.png';

export default {
  title: 'Components/templates/HomeNews',
  component: HomeNews,
  argTypes: {},
} as Meta;

const tabDataHomeNewsList: dataTabsType[] = [
  {
    titleTab: 'Tin Tập Đoàn',
    dataTab: [
      {
        imgSrc: imgHomeNewsCard,
        title: 'Người dân TP.HCM đón Giáng sinh sớm, check-in cùng cây thông 25 m',
        desc: 'Còn hơn một tháng nữa mới đến Giáng sinh, nhưng Novaland Gallery đã trang hoàng một tháng nữa mới đến Giáng sinh',
        date: '23/11/2021',
        totalViews: 111,
      },
      {
        imgSrc: imgHomeNewsCard2,
        title: 'Sắp khởi công đường Hàm Kiệm – Tiến Thành',
        desc: 'Ban Quản lý Dự án và xây dựng công trình giao thông thuộc Sở Giao thông vận tải xây dựng công trình giao thông thuộc Sở Giao thông vận tải',
        date: '23/11/2021',
        totalViews: 111,
      },
      {
        imgSrc: imgHomeNewsCard3,
        title: 'Nhiều hạng mục của sân bay Long Thành sẽ khởi công năm sau',
        desc: 'Báo cáo Quốc hội việc triển khai dự án sân bay Long Thành, Chính phủ cho biết mó hội việc triển khai dự án sân bay Long Thành, Chính phủ cho biết',
        date: '23/11/2021',
        totalViews: 111,
      },
    ],
  },
  {
    titleTab: 'Tin Thị Trường',
    dataTab: [
      {
        imgSrc: imgHomeNewsCard,
        title: 'Người dân TP.HCM đón Giáng sinh sớm, check-in cùng cây thông 25 m',
        desc: 'Còn hơn một tháng nữa mới đến Giáng sinh, nhưng Novaland Gallery đã trang hoàng một tháng nữa mới đến Giáng sinh',
        date: '23/11/2021',
        totalViews: 111,
      },
      {
        imgSrc: imgHomeNewsCard2,
        title: 'Sắp khởi công đường Hàm Kiệm – Tiến Thành',
        desc: 'Ban Quản lý Dự án và xây dựng công trình giao thông thuộc Sở Giao thông vận tải xây dựng công trình giao thông thuộc Sở Giao thông vận tải',
        date: '23/11/2021',
        totalViews: 111,
      },
      {
        imgSrc: imgHomeNewsCard3,
        title: 'Nhiều hạng mục của sân bay Long Thành sẽ khởi công năm sau',
        desc: 'Báo cáo Quốc hội việc triển khai dự án sân bay Long Thành, Chính phủ cho biết mó hội việc triển khai dự án sân bay Long Thành, Chính phủ cho biết',
        date: '23/11/2021',
        totalViews: 111,
      },
      {
        imgSrc: imgHomeNewsCard4,
        title: 'Doanh nghiệp địa ốc bắt tay ngân hàng tăng lợi ích cho người mua',
        desc: 'Hợp tác giữa doanh nghiệp bất động sản và ngân hàng tạo giải pháp tín dụng giàu giữa doanh nghiệp bất động sản và ngân hàng tạo giải pháp tín dụng giàu',
        date: '23/11/2021',
        totalViews: 111,
      },
    ],
  },
  {
    titleTab: 'Tin Dự Án',
    dataTab: [
      {
        imgSrc: imgHomeNewsCard,
        title: 'Người dân TP.HCM đón Giáng sinh sớm, check-in cùng cây thông 25 m',
        desc: 'Còn hơn một tháng nữa mới đến Giáng sinh, nhưng Novaland Gallery đã trang hoàng một tháng nữa mới đến Giáng sinh',
        date: '23/11/2021',
        totalViews: 111,
      },
      {
        imgSrc: imgHomeNewsCard2,
        title: 'Sắp khởi công đường Hàm Kiệm – Tiến Thành',
        desc: 'Ban Quản lý Dự án và xây dựng công trình giao thông thuộc Sở Giao thông vận tải xây dựng công trình giao thông thuộc Sở Giao thông vận tải',
        date: '23/11/2021',
        totalViews: 111,
      },
    ],
  },
];

export const normal: Story = () => (
  <HomeNews
    title="TIN TỨC"
    tabDataHomeNews={tabDataHomeNewsList}
  />
);

export const homeNewsCard: Story = () => (
  <div style={{ margin: '30px', maxWidth: '547px' }}>
    <HomeNewsCard
      imgSrc={imgHomeNewsCard}
      title="Người dân TP.HCM đón Giáng sinh sớm, check-in cùng cây thông 25 m"
      desc="Còn hơn một tháng nữa mới đến Giáng sinh, nhưng Novaland Gallery đã trang hoàng một tháng nữa mới đến Giáng sinh"
      date="23/11/2021"
      totalViews={111}
    />
  </div>
);
