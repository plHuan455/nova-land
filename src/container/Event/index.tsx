import React, {
  useMemo, useState,
} from 'react';
import { useQuery } from 'react-query';

import EventList from 'components/templates/EventList';
import LatestNews, { LatestNewsCardProps } from 'components/templates/LatestNews';
import Section from 'components/templates/Section';
import BannerRecruitmentContainer from 'container/Event/bannerContainer';
import BreadcrumbContainer from 'container/Event/breadcrumbContainer';
import getCalendarListService from 'services/calendar';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL } from 'utils/functions';

const EventContainer: React.FC = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
  });

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
        href: `/lich-su-kien/${ele.slug}`,
        ratio: index === 0 ? '582x534' : '582x252',
      }));
    }
    return [];
  }, [lastestNewsData]);

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
        href: `/lich-su-kien/${ele.slug}`,
      }));
    }
    return [];
  }, [calendarListData]);

  const handleChangePage = async (pageChange: number) => {
    setPagination({
      ...pagination,
      page: pageChange,
    });
  };

  return (
    <>
      <BannerRecruitmentContainer />
      <BreadcrumbContainer />
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
