import React from 'react';
import Course from './Course'

class CourseCatalog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {courseList, onSelectCourse, onRemoveCourse, selectedCourses} = this.props;
    return (
      <div className='courseCatalog'>
        <div className='searchWrapper'>
          <input 
            className='courseSearch'
            placeholder='Search Course'

          />
        </div>
        <div className='coursesWrapper'>
          {
            courseList.length &&
            courseList.map((courseObj, idx) => {
              return (
                <Course
                  key={idx + '-' + courseObj.name}
                  courseObj={courseObj}
                  isSelected={!!selectedCourses[courseObj.id]}
                  onSelectCourse={onSelectCourse}
                  onRemoveCourse={onRemoveCourse}
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
