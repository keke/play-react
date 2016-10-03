import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import MainPanel from './MainPanel'
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cards: []
    }
  };

  addNew = (newCard) => {

    this.setState((oldState)=>{
      oldState.cards.push(newCard);
      return oldState;
    });
    console.log("Added new element", newCard);
  };

  render() {
    return (
      <div className="App">
        <Header onAddNew={this.addNew}/>
        <MainPanel cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
