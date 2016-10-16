import React from 'react';
const colorHex = ['#84add0','#d4bdab','#d2cfd9','#c5dbcf', '#9de7e3'];
const borderColorHex = ['#3277b2','#b89173','#a69fb4','#9fc3af', '#3bcfc8'];
const CalendarCell = ({dayIdx, timeIdx, courseList, selectedCourses}) => {
  return (
    <div className='calendarCell'>
      {
        selectedCourses.map((courseId, idx) => {
          const courseTimeRange = courseList[courseId].timeIndex;
          if (courseTimeRange[0] === timeIdx) {
            const height = (courseTimeRange[courseTimeRange.length - 1] - timeIdx) * 50 - 1;
            const style = {
              height,
              width: `calc(100%/${selectedCourses.length})`,
              background: colorHex[idx%5],
              border: `1px solid ${borderColorHex[idx%5]}`,
            };
            return (
              <div 
                key={courseId} 
                style={style} 
                className='cellContent'
              >
                {courseList[courseId].name}
              </div>
            );
          } else {
            return null;
          }
        })
      }
    </div>
  );
};
export default CalendarCell;