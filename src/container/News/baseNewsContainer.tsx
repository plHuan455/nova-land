import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import HomeNews, { dataTabsType } from 'components/templates/HomeNews';
import NewsList from 'components/templates/NewsList';
import Section from 'components/templates/Section';
import { getNewsService } from 'services/home';
import { NewsCategoryChildrenTypes } from 'services/home/type';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY, getImageURL } from 'utils/functions';

interface BaseNewsProps {
  title: string;
  activeTab: NewsCategoryChildrenTypes;
  tabList: NewsCategoryChildrenTypes[];
  exceptIds: string;
}

const BaseNewsContainer: React.FC<BaseNewsProps> = ({
  title, activeTab, tabList, exceptIds,
}) => {
  const language = useAppSelector((state) => state.system.language);
  const [active, setActive] = useState(activeTab);

  const { data: res, isFetching } = useQuery(
    ['getNewsDataList', active.slug, language],
    () => getNewsService({
      limit: 4, page: 1, category_slug: active.slug, except_ids: exceptIds,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!active.slug && !!exceptIds,
    },
  );

  const baseNews = useMemo(() => {
    if (res?.data) {
      return res.data.map((item) => ({
        imgSrc: getImageURL(item.thumbnail),
        title: item.title,
        desc: item.description,
        date: formatDateDDMMYYYY(item.publishedAt),
        totalViews: item.viewed,
        href: `/chi-tiet-tin-tuc/${item.slug}`,
      }));
    }
    return [];
  }, [res]);

  const convertTabsData: dataTabsType[] = useMemo(() => tabList.map((item) => ({
    titleTab: item.name,
  })), [tabList]);

  const handleClickTab = (id: number) => {
    setActive(tabList[id]);
  };

  return (
    <div className="p-news_cateBlock animate animate-goUp">
      <Section>
        {tabList.length > 0 ? (
          <HomeNews
            title={title}
            href={`/tin-tuc/${active.slug}`}
            tabDataHomeNews={convertTabsData}
            newsList={baseNews}
            handleActive={(id) => handleClickTab(id)}
            nameButton={`Xem thêm ${active.name}`}
          />
        ) : (
          <NewsList
            title={title}
            href={`/tin-tuc/${active.slug}`}
            dataNewsList={baseNews}
            btnName={`Xem thêm ${active.name}`}
            isFetching={isFetching}
          />
        )}
      </Section>
    </div>
  );
};

export default BaseNewsContainer;
