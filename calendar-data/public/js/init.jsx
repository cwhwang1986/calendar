'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/wrapper';

const mountNode = document.querySelector('#container');
ReactDOM.render(
	<Wrapper/>,
	mountNode
);