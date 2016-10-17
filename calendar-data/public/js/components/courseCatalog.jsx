import React from 'react';
import Course from './Course'

class CourseCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperaryCourseList: [...this.props.courseList]
    };
  }
  componentWillReceiveProps(newProps) {
    this.refs.courseSearchBox.value = '';
    this.setState({temperaryCourseList: [...newProps.courseList]});
  }
  onSearchCourse(queryString) {
    if (!queryString) {
      this.setState({temperaryCourseList: [...this.props.courseList]});
      return;
    }
    const prefixMatch = [];
    const substringMatch = [];
    this.props.courseList.forEach(courseObj => {
      if (queryString === courseObj.name.substr(0, queryString.length)) {
        prefixMatch.push(courseObj);  
      } else if (courseObj.name.indexOf(queryString) > -1) {
        substringMatch.push(courseObj);
      }
    });
    this.setState({temperaryCourseList: prefixMatch.concat(substringMatch)});
  }
  render() {
    const {courseList, onSelectRemoveCourse, selectedCourses} = this.props;
    return (
      <div className='courseCatalog'>
        <div className='searchWrapper'>
          <input
            ref='courseSearchBox' 
            className='courseSearch'
            placeholder='Search By Course Name'
            onKeyUp={event => this.onSearchCourse(event.target.value)}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                event.target.blur();
                return;
              }
            }}
          />
        </div>
        <div className='coursesWrapper'>
          {
            this.state.temperaryCourseList.length &&
            this.state.temperaryCourseList.map((courseObj, idx) => {
              return (
                <Course
                  key={idx + '-' + courseObj.name}
                  courseObj={courseObj}
                  isSelected={!!selectedCourses[courseObj.id]}
                  onSelectRemoveCourse={onSelectRemoveCourse}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
};
export default CourseCatalog;
