import React, { useMemo } from 'react';
import DatePicker, { ReactDatePickerCustomHeaderProps } from 'react-datepicker';

import Icon from 'components/atoms/Icon';
import mapModifiers from 'utils/functions';

interface DatePickerProps {
  showMonthYearPicker?: boolean;
  selectedDate?: Date;
  eventList?: Date[];
  onChange?: (date: Date)=> void;
}

const HeaderDatePicker: React.FC<ReactDatePickerCustomHeaderProps> = ({
  date,
  decreaseMonth,
  increaseMonth,
  // changeYear,
  // changeMonth,
  // prevMonthButtonDisabled,
  // nextMonthButtonDisabled,
}) => (
  <div className="date-pickerHeader">
    <div className="date-pickerHeader_date">
      Tháng
      {' '}
      {date.getMonth() + 1}
      {' '}
      {date.getFullYear()}
    </div>
    <div className="date-pickerHeader_btnContainer">
      <button className={mapModifiers('date-pickerHeader_btn', 'previous')} type="button" onClick={decreaseMonth}>
        <Icon iconName="greyArrowRight" size="20" />
      </button>
      <button className={mapModifiers('date-pickerHeader_btn', 'next')} type="button" onClick={increaseMonth}>
        <Icon iconName="greyArrowRight" size="20" />
      </button>
    </div>

  </div>
);

const MyDatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  showMonthYearPicker,
  eventList = [],
  onChange,
}) => {
  const eventListObject: { [key: string] : boolean } = useMemo(() => {
    const result: { [key: string] : boolean } = {};
    eventList.forEach((event: Date) => {
      const newDate = new Date(event.getTime());
      newDate.setHours(0, 0, 0, 0);
      result[String(newDate.getTime())] = true;
    });
    return result;
  }, [eventList]);

  const copySelectedDate: Date|undefined = useMemo(() => {
    if (selectedDate) {
      const result = new Date(selectedDate.getTime());
      result.setHours(0, 0, 0, 0);
      return result;
    }

    return undefined;
  }, [selectedDate]);

  return (
    <div className="date-picker">
      <DatePicker
        dayClassName={(date: Date) => {
          const now = new Date();
          now.setHours(0, 0, 0, 0);
          return mapModifiers(
            'date-picker_day',
            copySelectedDate?.getTime() === date.getTime() && 'selected',
            date.getTime() === now.getTime() && 'now',
            eventListObject[String(date.getTime())] && 'event',
          );
        }}
        weekDayClassName={() => 'date-picker_weekDay'}
        monthClassName={() => 'date-picker_month'}
        selected={selectedDate}
        onChange={(date:Date) => { if (onChange) onChange(date); }}
        formatWeekDay={(nameOfDay: string) => nameOfDay.substring(0, 3)}
        dateFormatCalendar="dd MMM yyyy"
        showPopperArrow={false}
        inline
        showMonthYearPicker={showMonthYearPicker}
        renderCustomHeader={HeaderDatePicker}
      />
    </div>
  );
};

MyDatePicker.defaultProps = {
  onChange: undefined,
  showMonthYearPicker: false,
};

export default MyDatePicker;
