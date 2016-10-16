import React from 'react';
import Header from './Header';
import CourseCatalog from './CourseCatalog';
import Calendar from './Calendar';

class CalendarWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coursesList: [],
      selectedCourses: {}
    };
  } 
  componentDidMount() {
    this._fetchCourseList(coursesList => {
      this.setState({coursesList});
    })
  }
  _fetchCourseList(callback) {
    fetch('/bigCatalog')
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonObj) {
      callback(jsonObj.courses);
    }) 
  }
  render() {
    return (
      <div className='calendarWrapper'>
        <div className='headerWrapper'>
          <Header/>
        </div>
        <div className='contentWrapper'>
          <div className='calendarContent'>
            <CourseCatalog
              coursesList={this.state.coursesList}
              selectOrRemove={() => {}}
              selectedCourses={this.state.selectedCourses}
            />
            <Calendar/>
          </div>
        </div>
      </div>
    );
  }	
};
export default CalendarWrapper;
