import React from 'react';
import ReactDOM from 'react-dom';

export default class LightningCounterDisplay extends React.Component {
    render() {
        var divStyle = {
            width: 250,
            textAlign: 'center',
            backgroundColor: 'black',
            padding: 40,
            color: '#999',
            borderRadius: 10
        };

        return (
            <div style={divStyle}>
                <LightningCounter />
            </div>
        )
    }
}

class LightningCounter extends React.Component {
    constructor() {
        super();
        // this.tick = this.tick.bind(this);
        this.state = {strikes: 0};
    }
    componentDidMount() {
        this.timeID = setInterval(() => this.tick(), 1000);
        // 下面这种写法需要this.tick = this.tick.bind(this);这句，为何？
        // this.timeID = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timeID);
    }
    tick() {
        this.setState({
            strikes: this.state.strikes + 100
        })
    }
    render() {
        return <h1>{this.state.strikes}</h1>
    }
}