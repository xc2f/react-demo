import React from 'react';
import ReactDOM from 'react-dom';


export default class TodoList extends React.Component {
	constructor(){
		super();
		this.addItem = this.addItem.bind(this);
		this.state = {
			items: []
		}
	}
	addItem(e) {
		this.state.items.push({
			text: this._inputElement.value,
			key: Date.now()
		})
		this.setState({
			items: this.state.items
		})
		console.log(this.state.items);
		this._inputElement.value = '';
		this._inputElement.focus();
		e.preventDefault();
	}
	render() {
		return (
			<div className='todoListMain'>
				<div className='header'>
					<form onSubmit={this.addItem}>
						<input ref={(a)=>this._inputElement=a} placeholder='enter task'></input>
						<button type='submit'>add</button>
					</form>
				</div>
				<TodoItems items={this.state.items} />
			</div>
		)
	}
}

class TodoItems extends React.Component {
	render() {
		var items = this.props.items;
		var listItems = items.map((item) => <li key={item.key}>{item.text}</li>)
		
		return (
			<ul className='theList'>{listItems}</ul>
		)
	}
}
