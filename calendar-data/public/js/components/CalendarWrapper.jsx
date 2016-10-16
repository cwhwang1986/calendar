import React from 'react';
import Header from './Header';
import CourseCatalog from './CourseCatalog';
import Calendar from './Calendar';
import update from 'react-addons-update';

class CalendarWrapper extends React.Component {
  constructor(props) {
    super(props);
    // bind this to method
    this.onSelectCourse = this.onSelectCourse.bind(this);
    // Initialize the calendar 2d matrix
    const calendarMatrix = [];
    for (let i = 0; i < 24; i++) {
      const calendarRow = new Array(6).fill(null);
      calendarMatrix.push(calendarRow);
    }
    this.state = {
      courseList: [],
      calendarName: '',
      selectedCourses: {},
      calendarMatrix
    };
  } 
  componentDidMount() {
    this.fetchCourseList(courseList => {
      this.setState({courseList});
    })
  }
  fetchCourseList(callback) {
    fetch('/bigCatalog')
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonObj) {
      callback(jsonObj.courses);
    }) 
  }
  onSelectCourse(courseId) {
    const calendarMatrix = this.state.calendarMatrix;
    const newSelectedCourses = Object.assign({}, this.state.selectedCourses);
    const courseObj = this.state.courseList[courseId];
    const courseTimeIdx = courseObj.timeIndex;
    const courseDayIdx = courseObj.dayIndex;
    let newCalendarMatrix = [...calendarMatrix];
    let timeIdx = courseTimeIdx[0];
    let endTime = courseTimeIdx[courseTimeIdx.length - 1]
    for (;timeIdx < endTime; timeIdx++) {
      courseDayIdx.forEach(dayIdx => {
        if (calendarMatrix[timeIdx][dayIdx]) {
          console.log('Oh oh there\'s a conflict!');
          newCalendarMatrix = update(newCalendarMatrix, {[timeIdx]: {[dayIdx]: {$merge: {[courseId]: true}}}});
        } else {
          newSelectedCourses[courseId] = true;
          newCalendarMatrix = update(newCalendarMatrix, {[timeIdx]: {[dayIdx]: {$set: {[courseId]: true}}}});
        }
      });
    }    
    this.setState({
      calendarMatrix: newCalendarMatrix,
      selectedCourses: newSelectedCourses
    });
  }
  onRemoveCourse(courseId) {

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
              courseList={this.state.courseList}
              onSelectCourse={this.onSelectCourse}
              onRemoveCourse={this.onRemoveCourse}
              selectedCourses={this.state.selectedCourses}
            />
            <Calendar 
              courseList={this.state.courseList}
              calendarMatrix={this.state.calendarMatrix}
            />
          </div>
        </div>
      </div>
    );
  }	
};
export default CalendarWrapper;
