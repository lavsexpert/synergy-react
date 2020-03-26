import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {on: true, number: 0};
    this.change = this.change.bind(this);
    this.dice = this.dice.bind(this);
    console.log('constructor()');
  }

  componentWillMount(){
    var rnd = Math.floor(Math.random() * 6) + 1;
    this.setState({number: rnd});
    console.log('componentWillMount()');
  }

  render() {
    console.log('render()');
    return (
      <div>
        <h1>{this.state.number}</h1>
        <a href="http://google.com" onClick={this.dice}>Бросить кости</a>
        <button onClick={this.dice}>Бросить кости</button>
        <button onClick={this.change}>
        {this.state.on ? 'Включено' : 'Выключено'}</button>
      </div>
    );
  }
  componentDidMount(){
    this.timerID = setInterval(this.change(), 1);
    console.log('componentDidMount()');
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
    console.log('componentWillUnmount()');
  }

  dice(e){
    e.preventDefault();
    var rnd = Math.floor(Math.random() * 6) + 1;
    this.setState({number: rnd, on: !this.state.on});
  }

  change() {
    this.setState(state => ({
      on: !state.on
    }));
  }
}

export default App;
