import React from 'react';

import EventCard, { EventCardProps } from 'components/molecules/EventCard';
import Pagination from 'components/molecules/Pagination';
import Container from 'components/organisms/Container';

interface EventListProps {
  eventList: EventCardProps[];
  currentPage?: number;
  totalPage: number;
  handleGetPage: (p: number) => void;
}

const EventList: React.FC<EventListProps> = ({
  eventList, currentPage, totalPage, handleGetPage,
}) => (
  <div className="t-eventList">
    <Container>
      <div className="t-eventList_list">
        {eventList?.map((item, idx) => (
          <div key={`eventCard-item-${idx.toString()}`} className="t-eventList_list-item">
            <EventCard
              {...item}
            />
          </div>
        ))}
      </div>
      <div className="t-eventList_paginate">
        <Pagination
          pageCurrent={currentPage}
          totalPage={totalPage}
          handleChangePage={handleGetPage}
        />
      </div>
    </Container>
  </div>
);

EventList.defaultProps = {
  currentPage: 1,
};

export default EventList;
