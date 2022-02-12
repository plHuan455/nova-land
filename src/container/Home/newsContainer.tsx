import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import HomeNews from 'components/templates/HomeNews';
import Section from 'components/templates/Section';
import { getNewsService } from 'services/home';
import { NewsCategoryDataTypes } from 'services/home/type';
import { getNewsCategoryAction } from 'store/home';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL, formatDateDDMMYYYY } from 'utils/functions';

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
  const [indexActive, setIndexActive] = useState(0);
  // TODO: get news list by a category
  const tabDataHomeNewsList = useMemo(() => {
    if (newsCategoryList) {
      const dataFilter = newsCategoryList.filter((e) => e.parent === null);
      return dataFilter.map((item) => ({
        titleTab: item.name,
      }));
    }
    return [];
  }, [newsCategoryList]);

  const handleCategorySlug = (data: NewsCategoryDataTypes[]) => {
    if (data[indexActive].children.length > 0) {
      return data[indexActive].children[0].slug;
    }
    return data[indexActive].slug;
  };

  const { data, isLoading } = useQuery(
    ['getHomeNewsList', newsCategoryList, indexActive], () => getNewsService({
      limit: 4,
      category_slug: newsCategoryList ? handleCategorySlug(newsCategoryList) : undefined,
    }), {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!newsCategoryList,
    },
  );

  const newsData = useMemo(() => {
    if (data && data.data.length > 0) {
      return data.data.map((item) => ({
        imgSrc: getImageURL(item.thumbnail),
        title: item.title,
        desc: item.description,
        date: formatDateDDMMYYYY(new Date(item.publishedAt).toDateString()),
        totalViews: item.viewed,
        href: `/chi-tiet-tin-tuc/${item.slug}`,
      }));
    }
    return [];
  }, [data]);

  useEffect(() => {
    if (!newsCategoryList) {
      dispatch(getNewsCategoryAction());
    }

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
          newsList={newsData}
          handleActive={setIndexActive}
          loading={isLoading}
        />
      </Section>
    </div>
  );
};

export default NewsContainer;
