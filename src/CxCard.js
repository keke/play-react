import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RuleIcon from 'material-ui/svg-icons/hardware/device-hub';
import EndpointIcon from 'material-ui/svg-icons/av/album';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import EndpointContent from './EndpointContent';

import {
blue500,
grey500,
orange500,
} from 'material-ui/styles/colors';

const avatarSize = 25

class CxCard extends Component{
  updateTitle = (state)=>{
    var model = this.props.value;
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
    var model = this.props.value;
    if (model.type==='endpoint'){
      return <Avatar icon={<EndpointIcon/>}
        backgroundColor={this.updateColor(state)}
        size={avatarSize}/>
    }else{
      return <Avatar icon={<RuleIcon/>}
      backgroundColor={this.updateColor(state)}
      size={avatarSize}/>
    }
  };
  updateColor = (state)=>{
    if(state==='new'){
      return blue500;
    } else if(state === 'modified') {
      return orange500;
    }else{
      return grey500;
    }
  }
  constructor (props) {
    super(props);
    this.state = {
      state: this.props.value.state,
      model: this.props.value
    }
  };

  doSave = (event)=>{
    event.preventDefault();
    console.log('Save',event);
    this.setState({state:'saved'});
  };

  doDelete = (event)=>{

  };
  changeContent = (e , t) =>{
    e.preventDefault();
    console.log('content is changed', t);
    if(this.state.state === 'saved'){
      this.setState({state:'modified'});
    }
  }

  render(){
    var content = null;
    if (this.props.value.type==='endpoint'){
      content = <EndpointContent onChange={this.changeContent} value={this.state.model}/>
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
