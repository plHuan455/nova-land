import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import imgHomeNewsCard from 'assets/images/HomeNews/img_homeNewsCard.png';
import imgHomeNewsCard2 from 'assets/images/HomeNews/img_homeNewsCard2.png';
import imgHomeNewsCard3 from 'assets/images/HomeNews/img_homeNewsCard3.png';
import HomeNews from 'components/templates/HomeNews';
import Section from 'components/templates/Section';
import { getNewsCategoryAction } from 'store/home';
import { useAppSelector } from 'store/hooks';

export interface NewsTypes {
  button: {
    url: string;
    text: string;
    target: string;
  },
  titleSection: string;
}

interface NewsBlock {
  blocks: NewsTypes;
}

const NewsContainer: React.FC<NewsBlock> = ({
  blocks,
}) => {
  const dispatch = useDispatch();
  const { newsCategoryList } = useAppSelector((state) => state.home);
  const tabDataHomeNewsList = useMemo(() => newsCategoryList.map((item) => ({
    titleTab: item.name,
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
  })), [newsCategoryList]);

  useEffect(() => {
    dispatch(getNewsCategoryAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-home_news">
      <Section>
        <HomeNews
          title={blocks.titleSection}
          href={blocks.button.url}
          target={blocks.button.target}
          nameButton={blocks.button.text}
          tabDataHomeNews={tabDataHomeNewsList}
        />
      </Section>
    </div>
  );
};

export default NewsContainer;
