import React from 'react';
import { useQuery } from 'react-query';

// import dataCorporateNews from 'assets/dataDummy/newsList';
import NewsList from 'components/templates/NewsList';
import Section from 'components/templates/Section';
import { getNewsService } from 'services/home';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL } from 'utils/functions';

const CorporateNewsContainer: React.FC<{ cateSlug: string }> = ({ cateSlug }) => {
  const { data: res, isFetching } = useQuery(
    'getCorporateNewsList',
    () => getNewsService({ limit: '4', page: '1', category_slug: cateSlug }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const convertedCorporateNews = res?.data ? res?.data?.map((item) => ({
    imgSrc: getImageURL(item.thumbnail),
    title: item.title,
    desc: item.description,
    date: item.publishedAt,
    totalViews: item.viewed,
    href: item.slug,
  })) : [];

  return (
    <div className="animate animate-goUp">
      <div className="p-news_corporateNews">
        <Section>
          <NewsList
            title="Tin Tập đoàn"
            dataNewsList={convertedCorporateNews}
            btnName="Xem tất cả Tin tập đoàn"
            isFetching={isFetching}
          />
        </Section>
      </div>
    </div>
  );
};

export default CorporateNewsContainer;
