import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img style={{width: '75px'}} src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: '10'}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div style={{textAlign: "left"}}>
          {props.company}
        </div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  );
};

class Form extends React.Component {
  state = { userName: ''}
  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(resp => {
      console.log(resp.data);
      this.props.onSubmit(resp.data);
      this.setState({ userName: ''});
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        value={this.state.userName}
        onChange={(event) => this.setState({userName: event.target.value })}
        type="text"
        placeholder="Github Username" required />
        <button type="submit"> Add </button>
      </form>
    );
  }
}

class App extends Component {
  state = {
    cards: []
  }

  addNewCard = (details) =>
  {
    this.setState(prevState => ({
      cards: prevState.cards.concat(details)
    }));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
