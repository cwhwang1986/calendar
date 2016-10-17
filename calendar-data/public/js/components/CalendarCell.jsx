import React from 'react';

const colorHex = ['#84add0','#d4bdab','#d2cfd9','#c5dbcf', '#9de7e3'];
const borderColorHex = ['#3277b2','#b89173','#a69fb4','#9fc3af', '#3bcfc8'];
const CalendarCell = ({dayIdx, timeIdx, courseList, selected, onSelectRemoveCourse, showCourseSetting}) => {
  return (
    <div className='calendarCell'>
      {
        selected.map((courseId, idx) => {
          const courseTimeRange = courseList[courseId].timeIndex;
          const height = (courseTimeRange[courseTimeRange.length - 1] - timeIdx) * 50 - 1;
          const style = {
            height,
            width: `calc(100%/${selected.length})`,
            background: colorHex[courseId%5],
            border: `1px solid ${borderColorHex[courseId%5]}`,
          };
          if (courseTimeRange[0] === timeIdx) {
            style['borderBottom'] = 'none'; 
            style['zIndex'] = 2; 
          } else if (courseTimeRange[1] - 1 === timeIdx) {
            style['borderTop'] = 'none'; 
          } else {
            style['borderTop'] = style['borderBottom'] ='none'; 
          }
          return (
            <div 
              key={courseId} 
              style={style} 
              className='cellContent'
              onClick={event => {
                event.stopPropagation();
                if (courseTimeRange[0] !== timeIdx) return;
                const {top, left} = event.target.getBoundingClientRect();
                showCourseSetting(courseId, top, left);
              }}
            >
              {courseTimeRange[0] === timeIdx ? courseList[courseId].name : ''}
            </div>
          );
        })
      }
    </div>
  );
};
export default CalendarCell;
