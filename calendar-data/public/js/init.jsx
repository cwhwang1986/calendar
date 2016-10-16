'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import CalendarWrapper from './components/CalendarWrapper';

const mountNode = document.querySelector('#container');
ReactDOM.render(
	<CalendarWrapper/>,
	mountNode
);
