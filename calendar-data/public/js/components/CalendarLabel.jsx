import React from 'react';

const CalendarLabel = () => {
  const weekDays = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  return (
    <div className='calendarLabels'>
      {  
        weekDays.map((weekday, idx) => {
          const className = !idx ? 'timeColumn' : 'dayColumn';
          return (
            <div className={'weekdayLabel ' + className} key={idx + weekday}>{weekday}</div>
          );
        })
      }
    </div>
  );
};
export default CalendarLabel;
