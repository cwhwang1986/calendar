import React from 'react';
import Course from './Course';

const CourseSetting = ({courseObj, popUpPosition, closeCourseSetting, onSelectRemoveCourse}) => {
  const courseLength = courseObj.timeIndex[1] - courseObj.timeIndex[0];
  const top = popUpPosition[0] < 180 ? popUpPosition[0] + courseLength * 50 + 10 : popUpPosition[0] - 160;
  const left = popUpPosition[1] - 40;
  return (
    <div className='courseSetting' style={{top, left}}>
      <span 
        className='closePopUpIcon'
        onClick={closeCourseSetting}
      >
        X
      </span>
      <Course 
        courseObj={courseObj}
        onSelectRemoveCourse={onSelectRemoveCourse}
        isSelected={true}
      />
    </div>
  );
};
export default CourseSetting;
