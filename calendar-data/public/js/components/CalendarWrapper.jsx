import React from 'react';
import CourseCatalog from './CourseCatalog';

class CalendarWrapper extends React.Component {
  constructor(props) {
    super(props);
  } 
  componentDidMount() {
    console.log('this props', this.props.name);
  }
  render() {
    return (
      <div style={{padding: 20}}>
        <CourseCatalog/>
      </div>
    );
  }	
};
export default CalendarWrapper;
