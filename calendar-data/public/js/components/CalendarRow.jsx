import React from 'react';
import CalendarCell from './CalendarCell';

const CalendarRow = ({hourLabel, timeIdx, calendarMatrix, courseList, onSelectRemoveCourse, showCourseSetting}) => {
  const weekDays = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  return (
    <div className='calendarRow'>
      {  
        weekDays.map((weekday, dayIdx) => {
          if (!dayIdx) {
            return <div className='weekdayLabel timeColumn' key={dayIdx + weekday}>{hourLabel}</div>;
          } else {
            return (
              <div className='weekdayLabel dayColumn' key={dayIdx + weekday}>
                {
                  calendarMatrix[timeIdx][dayIdx] &&
                  <CalendarCell 
                    dayIdx={dayIdx} 
                    timeIdx={timeIdx} 
                    courseList={courseList}
                    showCourseSetting={showCourseSetting}
                    selected={calendarMatrix[timeIdx][dayIdx]}
                    onSelectRemoveCourse={onSelectRemoveCourse}
                  />
                }
              </div>
            );
          }
        })
      }
    </div>
  );
};
export default CalendarRow;
