import React from 'react';

const CalendarRow = ({hourLabel}) => {
  const weekDays = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  return (
    <div className='calendarRow'>
      {  
        weekDays.map((weekday, idx) => {
          if (!idx) {
            return <div className='weekdayLabel timeColumn' key={idx + weekday}>{hourLabel}</div>;
          } else {
            return <div className='weekdayLabel dayColumn' key={idx + weekday}></div>;
          }
        })
      }
    </div>
  );
};
export default CalendarRow;
