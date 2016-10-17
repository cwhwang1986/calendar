import React from 'react';

const WarningMessage = ({conflictCourses, closeWarningMessage}) => {
  const conflictsName = conflictCourses.conflicts.join(', ');
  return (
    <div className='warningMessage'>
      <span className='closePopUpIcon' onClick={closeWarningMessage}>X</span>
      You have course time conflict on your schedule. Course&nbsp;
      <span className='boldWarning'>{conflictCourses.selectCourseName}</span>&nbsp;is conflict with&nbsp;
      <span className='boldWarning'>{conflictsName + '.'}</span>
    </div>
  );
};
export default WarningMessage;
