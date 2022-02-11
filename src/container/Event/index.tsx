import React from 'react';

import eventPage from 'assets/dataDummy/eventPage';
import latestNewsCardList from 'assets/dataDummy/latestNews';
import EventList from 'components/templates/EventList';
import LatestNews from 'components/templates/LatestNews';
import BannerRecruitmentContainer from 'container/Event/bannerContainer';
import BreadcrumbContainer from 'container/Event/breadcrumbContainer';

const EventContainer: React.FC = () => (
  <>
    <BannerRecruitmentContainer />
    <BreadcrumbContainer />
    <LatestNews dataLatestNews={latestNewsCardList} />
    <EventList
      eventList={eventPage.eventData}
      totalPage={10}
      currentPage={1}
      // eslint-disable-next-line no-console
      handleGetPage={(p) => console.log(p)}
    />
  </>
);
export default EventContainer;
