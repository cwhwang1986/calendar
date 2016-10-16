import React from 'react';

const Course = ({courseObj, onSelectRemoveCourse, isSelected}) => {
  const courseButtonText = isSelected ? 'Unselect' : 'Select';
  const time = courseObj.time.join(' - ');
  const days = courseObj.days.map(day => day.substr(0, 3)).join('/');
  return (
    <div className='course'>
      <h4 className='courseName'>{courseObj.name}</h4>
      <div className='courseAuthor'>
        Author:&nbsp; 
        <span className='courseBoldText'>{courseObj.author}</span>
      </div>
      <div className='courseTime'>
        Time:&nbsp;   
        <span className='courseBoldText'>{time}</span>
        &nbsp;on&nbsp; 
        <span className='courseBoldText'>{days}</span>
      </div>
      <button 
        type='button' 
        className='primary courseSelectButton'
        onClick={event => {
          event.stopPropagation();
          onSelectRemoveCourse(courseObj.id);
        }}
        onMouseUp={event=>{
          event.stopPropagation();
          event.target.blur();
        }}
      >
        {courseButtonText}
      </button>
    </div>
  );
};
export default Course;
