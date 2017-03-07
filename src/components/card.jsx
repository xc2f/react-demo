import React from 'react';
import ReactDOM from 'react-dom';

export default class Card extends React.Component {
	render() {
		var cardStyle = {
			height: 200,
			width: 150,
			padding: 0,
			background: '#fff',
			filter: 'drop-shadow(0px 0px 5px #666)'
		};
		
		return (
			<div style={cardStyle}>
				<Square color={this.props.color} />
				<Label color={this.props.color} />
			</div>
		);
	}
}

class Square extends React.Component {
	render() {
		var squareStyle = {
			height: 150,
			backgroundColor: this.props.color
		};
		
		return (
			<div style={squareStyle}></div>
		);
	}
}

class Label extends React.Component {
	render() {
		var labelStyle = {
			fontWeight: 'bold',
			padding: 13,
			margin: 0
		}
		
		return (
			<p style={labelStyle}>{this.props.color}</p>
		)
	}
}
