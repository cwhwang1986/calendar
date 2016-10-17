import React from 'react';
import Header from './Header';
import Calendar from './Calendar';
import update from 'react-addons-update';
import CourseCatalog from './CourseCatalog';
import WarningMessage from './WarningMessage';

class PageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.modifyCalendarName = this.modifyCalendarName.bind(this);
    this.closeWarningMessage = this.closeWarningMessage.bind(this);
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
      calendarMatrix,
      conflictCourses: {},
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
    const conflictCourses = {selectCourseName: courseObj.name};
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
            conflictCourses.conflicts = calendarMatrix[timeIdx][dayIdx].map(courseId => this.state.courseList[courseId].name);
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
      selectedCourses: newSelectedCourses,
      conflictCourses,
    });
  }
  closeWarningMessage() {
    this.setState({conflictCourses: {}});
  }
  modifyCalendarName(calendarName) {
    this.setState({calendarName});
  }
  render() {
    return (
      <div className='pageWrapper'>
        <div className='headerWrapper'>
          <Header modifyCalendarName={this.modifyCalendarName}/>
        </div>
        <div className='calendarWrapper'>
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
            {
              this.state.conflictCourses.conflicts &&
              <WarningMessage 
                conflictCourses={this.state.conflictCourses}
                closeWarningMessage={this.closeWarningMessage}
              />
            }
          </div>
        </div>
      </div>
    );
  }	
};
export default PageWrapper;
