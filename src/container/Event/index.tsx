import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import { EventCardProps } from 'components/molecules/EventCard';
import EventList from 'components/templates/EventList';
import LatestNews from 'components/templates/LatestNews';
import Section from 'components/templates/Section';
import BannerRecruitmentContainer from 'container/Event/bannerContainer';
import BreadcrumbContainer from 'container/Event/breadcrumbContainer';
import getCalendarListService from 'services/calendar';
import { getImageURL } from 'utils/functions';

const LIMIT = 15;
const PAGE = 1;

const EventContainer: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [listData, setListData] = useState<EventCardProps[]>([]);
  const { slug } = useParams<{ slug: string }>();

  const fetchReportListData = useCallback(async (params?: {
    page?: number;
    limit?: number;
  }) => {
    try {
      setLoading(true);
      const res = await getCalendarListService({
        page: params?.page,
        limit: params?.limit,
      });
      const calendarListData = res.data.map((item) => ({
        imgSrc: getImageURL(item.thumbnail),
        title: item.title,
        description: item.description,
        href: `/lich-su-kien/${item.slug}`,
      }));
      setTotalPages(res.meta.totalPages);
      setPage(res.meta.page);
      setListData(calendarListData);
    } catch {
      // Empty
    } finally {
      setLoading(false);
    }
  }, []);

  const handleChangePage = async (pageChange: number) => {
    setLoading(true);
    try {
      if (totalPages > page) {
        const res = await getCalendarListService({
          page: pageChange,
          limit: LIMIT,
        });
        const calendarListData = res.data.map((item) => ({
          imgSrc: getImageURL(item.thumbnail),
          title: item.title,
          description: item.description,
          href: `/lich-su-kien/${item.slug}`,
        }));
        setTotalPages(res.meta.totalPages);
        setPage(res.meta.page);
        setListData(calendarListData);
      } else {
        setListData(listData.slice(0, LIMIT));
        setPage(1);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReportListData({
      limit: LIMIT,
      page: PAGE,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <>
      <BannerRecruitmentContainer />
      <BreadcrumbContainer />
      {isLoading ? (
        <Loading isShow />
      )
        : (
          <>
            <LatestNews dataLatestNews={listData} />
            <Section modifiers="noPb">
              <EventList
                eventList={listData}
                totalPage={totalPages}
                currentPage={1}
                // eslint-disable-next-line no-console
                handleGetPage={handleChangePage}
              />
            </Section>
          </>
        )}
    </>
  );
};
export default EventContainer;
