import React from 'react';
import Header from './Header';
import CourseCatalog from './CourseCatalog';
import Calendar from './Calendar';

class CalendarWrapper extends React.Component {
  constructor(props) {
    super(props);
  } 
  componentDidMount() {
    console.log('this props', this.props.name);
  }
  render() {
    return (
      <div className='calendarWrapper'>
        <div className='headerWrapper'>
          <Header/>
        </div>
        <div className='contentWrapper'>
          <div className='calendarContent'>
            <CourseCatalog/>
            <Calendar/>
          </div>
        </div>
      </div>
    );
  }	
};
export default CalendarWrapper;
