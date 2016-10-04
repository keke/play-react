import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class EndpintContent extends Component{
  constructor (props) {
    super(props);
    this.state = props.value;
  };
  changeField=(e)=>{
    // console.log(e.target);
    var s = {};
    s[e.target.name] = e.target.value;
    this.setState(s);
    this.props.onChange(e, this.state);
  };
  render(){
    return (
      <div className="Endpoint">
        <TextField
          name="name"
          hintText="Endpoint name"
          floatingLabelText="Endpoint name"
          onChange={this.changeField}
          value={this.state.name}
        />
        <TextField
          name="url"
          hintText="Endpoint Url"
          floatingLabelText="Endpoint URL"
          onChange={this.changeField}
          value={this.state.url}
        />
      </div>
    );
  }
}

export default EndpintContent;
