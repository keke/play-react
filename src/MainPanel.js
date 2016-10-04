import React, { Component } from 'react';
// import './Header.css';
import CxCard from './CxCard'

class MainPanel extends Component{
  render(){
    var cards = this.props.cards.map((model, i)=>{
      return (
        <CxCard key={i} value={model}>
        </CxCard>
      )
    });
    return (
      <div className="MainPanel">
        {cards}
      </div>
    )
  }
}

export default MainPanel;
