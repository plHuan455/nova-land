import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NewsCategory, { NewsCategoryCard } from '.';

import dataNewsCategoryList from 'assets/dataDummy/newsCategory';
import imgNewsCategory4 from 'assets/images/NewsCategory/img_newsCategory4.png';

export default {
  title: 'Components/templates/NewsCategory',
  component: NewsCategory,
  argTypes: {
    totalPage: {
      control: {
        type: 'number',
      },
      defaultValue: 10,
    },
  },
} as Meta;

export const card: Story = () => (
  <div style={{ maxWidth: '378px', margin: '30px' }}>
    <Router>
      <NewsCategoryCard
        imgSrc={imgNewsCategory4}
        ratio="376x212"
        alt="ImgNewsCategory4"
        title="Cụm sân golf PGA tại Novaworld Phan Thiet..."
        desc="Ngày 05 - 06/01/2022, tại Novaland Gallery (2Bis Nguyễn Thị Minh Khai, Q.1, TP.HCM),..."
        href="/"
        bntText="Xem thêm"
      />
    </Router>
  </div>
);

export const ABC: Story = () => (
  <div style={{ maxWidth: '378px', margin: '30px' }}>
    <Router>
      <NewsCategoryCard
        imgSrc={imgNewsCategory4}
        ratio="376x212"
        alt="ImgNewsCategory4"
        title="Cụm sân golf PGA tại Novaworld Phan Thiet..."
        desc="Ngày 05 - 06/01/2022, tại Novaland Gallery (2Bis Nguyễn Thị Minh Khai, Q.1, TP.HCM),..."
        href="/"
        isLatestJobs
        tagLeft="Tài Chính"
        tagRight="Toàn thời gian"
        locationText="HO CHI MINH, city"
        bntText="Tìm hiểu thêm"
      />
    </Router>
  </div>
);

export const Normal: Story = ({
  totalPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ height: 'max-content' }}>
      <Router>
        <NewsCategory
          dataNewsCategory={dataNewsCategoryList}
          totalPage={totalPage}
          currentPage={currentPage}
          handleChangePage={(page: number) => setCurrentPage(page)}
        />
      </Router>
    </div>
  );
};
