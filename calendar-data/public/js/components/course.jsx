import React from 'react';

const Course = ({courseName, selectOrRemove, isSelected}) => {
  const courseSelectIcon = isSelected ? '-' : '+';
  return (
    <div>
        <span>{courseName}</span>
        <span onClick={selectOrRemove}>{courseSelectIcon}</span>
    </div>
  );
};