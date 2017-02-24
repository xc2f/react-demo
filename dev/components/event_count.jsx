import React from 'react';
import ReactDOM from 'react-dom';

export default class countParent extends React.Component {
	constructor(){
		super();
		this.state = {count: 0};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		if(e.shiftKey) {
			this.setState(prevState => ({
				count: prevState.count += 10
			}));
		} else {
			this.setState(prevState => ({
				count: prevState.count += 1
			}));
		}
	}
	render(){
		var backgroundStyle = {
			padding: 50,
			backgroundColor: '#ffc53a',
			width: 250,
			height: 100,
			borderRadius: 10,
			textAlign: 'center'
		};
		
		var buttonStyle = {
			fontSize: '1em',
			width: 30,
			height: 30,
			color: '#333',
			fontWeight: 'bold',
			lineHeight: '3px'
		};
		
		return (
			<div style={backgroundStyle}>
				<Counter display={this.state.count} />
				<button style={buttonStyle} onClick={this.handleClick}>+</button>
			</div>
		)
	}
}

class Counter extends React.Component {
	render() {
		var textStyle = {
			fontSize: 72,
			color: '#333',
			fontWeight: 'bold'
		};
		
		return (
			<div style={textStyle}>
				{this.props.display}
			</div>
		)
	}
}
