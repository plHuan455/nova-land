import React, {
  useMemo, useState,
} from 'react';
import { useQuery } from 'react-query';

import Heading from 'components/atoms/Heading';
import Breadcrumb from 'components/molecules/Breadcrumb';
import BannerRecruitment from 'components/templates/BannerRecruitment';
import EventList from 'components/templates/EventList';
import LatestNews, { LatestNewsCardProps } from 'components/templates/LatestNews';
import Section from 'components/templates/Section';
import HelmetContainer from 'container/helmet';
import getCalendarListService from 'services/calendar';
import { useAppSelector } from 'store/hooks';
import { getBreadcrumbs } from 'utils/breadcrumbs';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { convertBanner, getImageURL } from 'utils/functions';
import { getPrefixURLCode } from 'utils/language';

const EventContainer: React.FC<BasePageData<[]>> = ({
  breadcrumbs,
  openGraphData,
  banners,
  seoData,
  pageData,
}) => {
  const language = useAppSelector((state) => state.system.language);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
  });
  const convertedBanner = convertBanner(banners);

  const { data: lastestNewsData } = useQuery(
    ['getLastestCalendar'], () => getCalendarListService({
      limit: 3,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const { data: calendarListData } = useQuery(
    ['getCalendarList', pagination.page], () => getCalendarListService({
      limit: 6,
      page: pagination.page,
      except_ids: lastestNewsData?.data.map((ele) => ele.id).join(',') || '',
    }),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!lastestNewsData,
    },
  );

  const lastestNews: LatestNewsCardProps[] = useMemo(() => {
    if (lastestNewsData) {
      return lastestNewsData.data.map((ele, index) => ({
        imgSrc: getImageURL(ele.thumbnail),
        title: ele.title,
        description: ele.description,
        href: getPrefixURLCode(language, 'EVENT_DETAIL', ele.slug),
        ratio: index === 0 ? '582x534' : '582x252',
      }));
    }
    return [];
  }, [lastestNewsData, language]);

  const calendarList = useMemo(() => {
    if (calendarListData) {
      setPagination({
        page: calendarListData.meta.page,
        totalPages: calendarListData.meta.totalPages,
      });
      return calendarListData.data.map((ele) => ({
        imgSrc: getImageURL(ele.thumbnail),
        title: ele.title,
        description: ele.description,
        href: getPrefixURLCode(language, 'EVENT_DETAIL', ele.slug),
      }));
    }
    return [];
  }, [calendarListData, language]);

  const handleChangePage = async (pageChange: number) => {
    setPagination({
      ...pagination,
      page: pageChange,
    });
  };

  return (
    <>
      <HelmetContainer ogData={openGraphData} seoData={seoData} />
      <div className="p-event_bannerEvent">
        <BannerRecruitment
          imageSrc={convertedBanner[0]?.src || ''}
          imageTabletSrc={convertedBanner[0].srcTablet}
          imageMobileSrc={convertedBanner[0].srcMobile}
        >
          <Heading modifiers={['52x65', 'white', 'center', 'fontCalibri', '700']}>{banners[0].data.title}</Heading>
        </BannerRecruitment>
      </div>
      <div className="p-event_breadcrumb u-mt-md-24 u-mb-md-24 u-mt-14 u-mb-16">
        <Breadcrumb
          breadcrumbs={getBreadcrumbs({
            breadcrumbs: breadcrumbs || [],
            language,
            title: pageData.title || '',
          })}
        />
      </div>
      <LatestNews dataLatestNews={lastestNews} />
      <Section modifiers="noPt">
        <EventList
          eventList={calendarList}
          totalPage={pagination.totalPages}
          currentPage={pagination.page}
          handleGetPage={handleChangePage}
        />
      </Section>
    </>
  );
};
export default EventContainer;
