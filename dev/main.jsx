import React from 'react';
import ReactDOM from 'react-dom';

// import components
import Card from './components/card';
import LightningCounterDisplay from './components/count';
import Circle from './components/circle';
import Count from './components/event_count';

var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552", "#A40E4C"];

var renderData = [];
for(var i = 0; i < colors.length; i++) {
	var color = colors[i];
	renderData.push(<Circle key={i + color} bgColor={colors[i]}/>); 
}


import TodoList from './components/to_do_list';


ReactDOM.render(
	<div className='here'>
	{
//		<Card color="#abc" />
//		<LightningCounterDisplay />
//		{renderData}
//		<Count />
	}
	<TodoList />

	</div>,
	document.getElementById('root')
);