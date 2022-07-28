import React, { useState } from 'react';

import EventItem from '../EventItem';

import MyDatePicker from 'components/molecules/DatePicker';
import Pulldown from 'components/molecules/Pulldown';
import mapModifiers from 'utils/functions';

interface CalendarEventProps {
}

const CalendarEvent: React.FC<CalendarEventProps> = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const [eventList] = useState<Date[]>([
    new Date(2022, 5, 27),
    new Date(2022, 6, 20),
    new Date(2022, 7, 3),
    new Date(2022, 7, 3),
    new Date(2022, 7, 3),
  ]);

  const [showMonthYearPicker] = useState<boolean>(false);

  return (
    <div className="calendar-event">
      <div className="calendar-event_datePicker">
        <MyDatePicker
          selectedDate={selectedDate}
          onChange={(date: Date) => { setSelectedDate(date); }}
          eventList={eventList}
          showMonthYearPicker={showMonthYearPicker}
        />
      </div>

      <div className="calendar-event_event">
        <div className="calendar-event_eventHeader">
          <div className="calendar-event_eventInput">
            <Pulldown />
          </div>

          <ul className="calendar-event_eventNote">
            <li className={mapModifiers('calendar-event_eventNote_item', 'select')}>Đang chọn</li>
            <li className={mapModifiers('calendar-event_eventNote_item', 'today')}>Hôm nay</li>
            <li className={mapModifiers('calendar-event_eventNote_item', 'event')}>Ngày có sự kiện</li>
          </ul>
        </div>

        <div className="calendar-event_eventList">
          {eventList.map((event) => (
            <div className="calendar-event_eventList_item">
              <EventItem date={event} description={event.toDateString()} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

CalendarEvent.defaultProps = {
};

export default CalendarEvent;
