import React from 'react';
import CalendarLabel from './CalendarLabel';
import CalendarRows from './CalendarRows';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='calendar'>
        <CalendarLabel/>
        <CalendarRows/>
      </div>
    );
  }
};
export default Calendar;
