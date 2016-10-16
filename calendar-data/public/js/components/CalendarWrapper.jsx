import React from 'react';
import Header from './Header';
import CourseCatalog from './CourseCatalog';
import Calendar from './Calendar';
import update from 'react-addons-update';

class CalendarWrapper extends React.Component {
  constructor(props) {
    super(props);
    // bind this to method
    this.onSelectRemoveCourse = this.onSelectRemoveCourse.bind(this);
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
  onSelectRemoveCourse(courseId) {
    const calendarMatrix = this.state.calendarMatrix;
    const newSelectedCourses = Object.assign({}, this.state.selectedCourses);
    const courseObj = this.state.courseList[courseId];
    const courseTimeIdx = courseObj.timeIndex;
    const courseDayIdx = courseObj.dayIndex;
    let newCalendarMatrix = [...calendarMatrix];
    let timeIdx = courseTimeIdx[0];
    const endTime = courseTimeIdx[courseTimeIdx.length - 1]
    for (;timeIdx < endTime; timeIdx++) {
      courseDayIdx.forEach(dayIdx => {
        if (this.state.selectedCourses[courseId]) {
          delete newSelectedCourses[courseId];
          const targetIdx = newCalendarMatrix[timeIdx][dayIdx].indexOf(courseId);
          newCalendarMatrix = update(newCalendarMatrix, {[timeIdx]: {[dayIdx]: {$splice: [[targetIdx, 1]]}}});
        } else {
          if (calendarMatrix[timeIdx][dayIdx] && calendarMatrix[timeIdx][dayIdx].length) {
            console.log('Oh oh there\'s a conflict!');
            newCalendarMatrix = update(newCalendarMatrix, {[timeIdx]: {[dayIdx]: {$push: [courseId]}}});
          } else {
            newCalendarMatrix = update(newCalendarMatrix, {[timeIdx]: {[dayIdx]: {$set: [courseId]}}});
          }
          newSelectedCourses[courseId] = true;
        }
      });
    }    
    this.setState({
      calendarMatrix: newCalendarMatrix,
      selectedCourses: newSelectedCourses
    });
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
              onSelectRemoveCourse={this.onSelectRemoveCourse}
              selectedCourses={this.state.selectedCourses}
            />
            <Calendar 
              courseList={this.state.courseList}
              calendarMatrix={this.state.calendarMatrix}
              selectedCourses={this.state.selectedCourses}
              onSelectRemoveCourse={this.onSelectRemoveCourse}
            />
          </div>
        </div>
      </div>
    );
  }	
};
export default CalendarWrapper;
