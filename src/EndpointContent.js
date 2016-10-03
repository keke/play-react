import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class EndpintContent extends Component{
  render(){
    return (
      <div className="Endpoint">
      <TextField
        hintText="Endpoint name"
        floatingLabelText="Endpoint name"
      />
      <TextField
        hintText="Endpoint Url"
        floatingLabelText="Endpoint URL"
      />
      </div>
    );
  }
}

export default EndpintContent;
