import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RuleIcon from 'material-ui/svg-icons/hardware/device-hub';
import EndpointIcon from 'material-ui/svg-icons/av/album';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import EndpintContent from './EndpointContent';

import {
blue500,
grey500,
} from 'material-ui/styles/colors';

class CxCard extends Component{
  updateTitle = (state)=>{
    var model = this.props.model;
    if(state === 'new'){
      if (model.type==='endpoint'){
        return 'Create a New Endpoint';
      }else {
        return 'Create a New Rule';
      }
    }else{
      if(model.type==='endpoint'){
        return 'Endpoint';
      }else{
        return 'Rule';
      }
    }
  };
  updateAvatar  = (state)=>{
    var model = this.props.model;
    if(state === 'new'){
      if (model.type==='endpoint'){
        return <Avatar icon={<EndpointIcon/>} color={blue500} size={20}/>
      }
    }else{
      if(model.type==='endpoint'){
        return <Avatar icon={<EndpointIcon/>} color={grey500} size={20}/>
      }
    }
  };
  updateColor = (state)=>{
    if(state==='new'){
      return blue500;
    } else {
      return grey500;
    }
  }
  constructor (props) {
    super(props);

    this.state = {
      state: this.props.model.state
    }
  };

  doSave = (event)=>{
    event.preventDefault();
    console.log('Save',event);
    this.setState({state:'saved'});
  };

  doDelete = (event)=>{

  }

  render(){
    var content = null;
    if (this.props.model.type==='endpoint'){
      content = <EndpintContent/>
    }
    return (
      <Card>
        <CardHeader title={this.updateTitle(this.state.state)}
          avatar={this.updateAvatar(this.state.state)}
          titleColor={this.updateColor(this.state.state)}>
        </CardHeader>
        <CardText>
          {content}
        </CardText>
        <CardActions>
          <FlatButton label="Save" onTouchTap={this.doSave}/>
          <FlatButton label="Delete" onTouchTap={this.doDelete}/>
        </CardActions>
      </Card>
    )
  };
}

export default CxCard;
