import React from 'react';
import Course from './Course'

const CourseCatalog = ({courseList, selectOrRemove, selectedCourses}) => {
  return (
    <div className='courseCatalog'>
      {
        false &&
        courseList.map((courseObj, idx) => {
          return (
            <Course
              key={idx + '-' + courseObj.name}
              courseName={courseObj.name}
              isSelected={selectedCourses.has(courseObj.id)}
              selectOrRemove={selectOrRemove.bind(courseObj.id)}
            />
          );
        })
      }
      HELLOOOOOOOO in CourseCatalog
    </div>
  );
};
export default CourseCatalog;
