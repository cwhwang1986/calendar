'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import CalendarWrapper from './components/CalendarWrapper';

const mountNode = document.querySelector('#container');
window.setTimeout(() => {
  console.log('timeout');
  ReactDOM.render(
    <CalendarWrapper/>,
    mountNode
  );
}, 2000);