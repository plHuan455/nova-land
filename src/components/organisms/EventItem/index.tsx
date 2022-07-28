import React from 'react';

import { addZeroWhenLessThanTen } from 'utils/functions';

interface EventItemProps {
  date: Date;
  description: string;
}
const EventItem: React.FC<EventItemProps> = ({ date, description }) => (
  <div className="event-item">
    <div className="event-item_date">
      <div className="event-item_date_dayMonth">
        {addZeroWhenLessThanTen(date.getDate())}
        -
        {addZeroWhenLessThanTen(date.getMonth())}
      </div>
      <div className="event-item_date_monthYear">
        {addZeroWhenLessThanTen(date.getMonth())}
        /
        {addZeroWhenLessThanTen(date.getFullYear())}
      </div>
    </div>

    <p className="event-item_description">
      {description}
    </p>

  </div>
);

EventItem.defaultProps = {
};

export default EventItem;
