import React from 'react';
import Course from './Course'

class CourseCatalog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { coursesList, selectOrRemove, selectedCourses } = this.props;
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
            coursesList.length &&
            coursesList.map((courseObj, idx) => {
              return (
                <Course
                  key={idx + '-' + courseObj.name}
                  courseObj={courseObj}
                  isSelected={!!selectedCourses[courseObj.id]}
                  selectOrRemove={selectOrRemove.bind(courseObj.id)}
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
