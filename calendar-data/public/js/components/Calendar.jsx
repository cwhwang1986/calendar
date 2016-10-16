import React from 'react';
import CalendarLabel from './CalendarLabel';
import CalendarRows from './CalendarRows';
import CourseSetting from './CourseSetting'

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.showCourseSetting = this.showCourseSetting.bind(this);
    this.closeCourseSetting = this.closeCourseSetting.bind(this);
    this.state = {
      courseSetting: null,
      popUpPosition: [],
    }
  }
  componentWillReceiveProps(newProps) {
    if (this.state.courseSetting && 
      !newProps.selectedCourses[this.state.courseSetting.id]) {
      this.setState({courseSetting: null, popUpPosition: []});
    }
  }
  showCourseSetting(courseId, top, left) {
    this.setState({courseSetting: this.props.courseList[courseId], popUpPosition: [top, left]});
  }
  closeCourseSetting() {
    this.setState({courseSetting: null, popUpPosition: []});
  }
  render() {
    return (
      <div className='calendar'>
        <CalendarLabel/>
        <CalendarRows {...this.props} showCourseSetting={this.showCourseSetting}/>
        {
            this.state.courseSetting &&
            <CourseSetting
              courseObj={this.state.courseSetting}
              popUpPosition={this.state.popUpPosition} 
              closeCourseSetting={this.closeCourseSetting}
              onSelectRemoveCourse={this.props.onSelectRemoveCourse}
            />
        }
      </div>
    );
  }
};
export default Calendar;
