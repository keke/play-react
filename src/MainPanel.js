import React, { Component } from 'react';
// import './Header.css';
import CxCard from './CxCard'

class MainPanel extends Component{
  render(){
    var cards = this.props.cards.map((model)=>{
      return (
        <CxCard key={model.id} model={model}>
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
