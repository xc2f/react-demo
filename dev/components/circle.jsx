import React from 'react';
import ReactDOM from 'react-dom';

export default class Circle extends React.Component {
	render() {
		var circleStyle = {
			padding: 10,
			margin: 20,
			display: 'inline-block',
			backgroundColor: this.props.bgColor,
			borderRadius: '50%',
			width: 100,
			height: 100
		};
		
		return (
			<div style={circleStyle}></div>
		)
	}
}
