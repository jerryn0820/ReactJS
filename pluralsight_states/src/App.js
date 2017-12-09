import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class Input extends React.Component {
//   state = {
//     label: "Label 1"
//   };
//   render() {
//     return(
//       <div>
//         <label>{this.state.label}</label>
//         <input></input>
//       </div>
//     );
//   }
// }

class AddButton extends React.Component {
  render() {
    return(
      <button
      onClick={() => this.props.onClickFunction(this.props.incrementVal)}>
        +{this.props.incrementVal}
      </button>
    );
  }
}
class SubButton extends React.Component {
  render() {
    return(
      <button
      onClick={() => this.props.onClickFunction(this.props.decrementVal)}>
        -{this.props.decrementVal}
      </button>
    );
  }
}

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
}

class App extends Component {
  state = {
    counter: 0
  }
  incrementCounter = (incrementVal) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementVal
    }
  ))
  };

  decrementCounter = (decrementVal) => {
    this.setState((prevState) => ({
      counter: prevState.counter - decrementVal
    }
  ))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Content">
          <AddButton incrementVal={1} onClickFunction={this.incrementCounter}/>
          <AddButton incrementVal={5} onClickFunction={this.incrementCounter}/>
          <AddButton incrementVal={10} onClickFunction={this.incrementCounter}/>
          <SubButton decrementVal={1} onClickFunction={this.decrementCounter}/>
          <SubButton decrementVal={5} onClickFunction={this.decrementCounter}/>
          <SubButton decrementVal={10} onClickFunction={this.decrementCounter}/>
          <Result counter={this.state.counter}/>
        </div>
      </div>
    );
  }
}

export default App;
