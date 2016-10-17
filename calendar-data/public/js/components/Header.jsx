import React from 'react';

const Header = ({modifyCalendarName, calendarName}) => {
  return (
    <div className='header'>
      <div className='courseraLogoWrapper'>
        <img src='../../img/coursera-logo.svg' className='courseraLogo' alt='Coursera'/>
      </div>
      <div className='calendarNameWrapper'>
        <input 
          value={calendarName}
          className='calendarName'
          placeholder='Enter Calendar Name'
          onChange={event => modifyCalendarName(event.target.value)}
          onKeyPress={event => event.key === 'Enter' && event.target.blur()}
        />
      </div>
    </div>
  );
};
export default Header;
