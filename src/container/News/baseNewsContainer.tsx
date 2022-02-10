import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import HomeNews, { dataTabsType } from 'components/templates/HomeNews';
import NewsList from 'components/templates/NewsList';
import Section from 'components/templates/Section';
import { getNewsService } from 'services/home';
import { NewsCategoryChildrenTypes } from 'services/home/type';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL } from 'utils/functions';

interface BaseNewsProps {
  cateSlug: string;
  title: string;
  btnText: string;
  tabList: NewsCategoryChildrenTypes[];
  exceptIds: string;
}

const BaseNewsContainer: React.FC<BaseNewsProps> = ({
  cateSlug, title, btnText, tabList, exceptIds,
}) => {
  const [slugActive, setSlugActive] = useState(cateSlug);
  const { data: res, isFetching } = useQuery(
    ['getNewsDataList', slugActive],
    () => getNewsService({
      limit: '4', page: '1', category_slug: slugActive, except_ids: exceptIds,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!slugActive && !!exceptIds,
    },
  );
  const convertedBaseNews = res?.data ? res?.data?.map((item) => ({
    imgSrc: getImageURL(item.thumbnail),
    title: item.title,
    desc: item.description,
    date: item.publishedAt,
    totalViews: item.viewed,
    href: item.slug,
  })) : [];

  const convertTabsData: dataTabsType[] = useMemo(() => tabList.map((item) => ({
    titleTab: item.name,
  })), [tabList]);

  const handleClickTab = (id: number) => {
    setSlugActive(tabList[id].slug);
  };

  return (
    <div className="p-news_cateBlock animate animate-goUp">
      <Section>
        {tabList.length > 0 ? (
          <HomeNews
            title={title}
            href={cateSlug}
            tabDataHomeNews={convertTabsData}
            newsList={convertedBaseNews}
            handleActive={(id) => handleClickTab(id)}
          />
        ) : (
          <NewsList
            title={title}
            href={cateSlug}
            dataNewsList={convertedBaseNews}
            btnName={btnText}
            isFetching={isFetching}
          />
        )}
      </Section>
    </div>
  );
};

export default BaseNewsContainer;
