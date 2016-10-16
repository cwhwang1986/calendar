import React from 'react';
import CalendarRow from './CalendarRow';

const CalendarRows = () => {
  const hours = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
    '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];
  return (
    <div className='calendarRows'>
      {  
        hours.map((hourLabel, idx) => {
          return (
            <CalendarRow key={idx + hourLabel} hourLabel={hourLabel}/>
          );
        })
      }
    </div>
  );
};
export default CalendarRows;
