import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import HomeNews, { dataTabsType } from 'components/templates/HomeNews';
import NewsList from 'components/templates/NewsList';
import Section from 'components/templates/Section';
import { getNewsService } from 'services/home';
import { NewsCategoryChildrenTypes } from 'services/home/type';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY, getImageURL } from 'utils/functions';
import { getPrefixURLCode } from 'utils/language';

export interface BaseNewsProps {
  title: string;
  activeTab: NewsCategoryChildrenTypes;
  tabList: NewsCategoryChildrenTypes[];
  exceptIds: string;
  classTabsActive?: string;
}

const BaseNewsContainer: React.FC<BaseNewsProps> = ({
  title,
  activeTab,
  tabList,
  exceptIds,
  classTabsActive,
}) => {
  const { t } = useTranslation();
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
        href: getPrefixURLCode(language, 'NEWS_DETAIL', item.slug),
      }));
    }
    return [];
  }, [language, res?.data]);

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
            href={getPrefixURLCode(language, 'NEWS_CATEGORY', active.slug)}
            tabDataHomeNews={convertTabsData}
            newsList={baseNews}
            handleActive={(id) => handleClickTab(id)}
            nameButton={`${t('general.see_more_btn')} ${active.name}`}
            loading={isFetching}
            classTabsActive={classTabsActive}
          />
        ) : (
          <NewsList
            title={title}
            href={getPrefixURLCode(language, 'NEWS_CATEGORY', active.slug)}
            dataNewsList={baseNews}
            btnName={`${t('general.see_more_btn')} ${active.name}`}
            isFetching={isFetching}
          />
        )}
      </Section>
    </div>
  );
};

export default BaseNewsContainer;
