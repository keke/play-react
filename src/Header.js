import React, { Component } from 'react';
import './Header.css';

import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import HomeIcon from 'material-ui/svg-icons/action/home';
import SearchIcon from 'material-ui/svg-icons/action/search';
import AddIcon from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import RuleIcon from 'material-ui/svg-icons/hardware/device-hub';
import EndpointIcon from 'material-ui/svg-icons/av/album';
import _ from 'lodash'

const toolBarStyle = {
  backgroundColor: 'transparent'
}

var IDS = [];

var genId = () => {
  while(true){
    var id = _.random(0,10000, false);
    var r = _.indexOf(IDS, id);
    if (r === -1){
      IDS.push(id);
      return id;
    }
  }
}

class Header extends Component{
  constructor(props) {
    super(props);

    this.state = {
      addPopoverOpen: false,
    };
  }
  tapAdd = (e)=>{
    e.preventDefault();
    // console.log('Add clicked',e);
    this.setState({
      addPopoverOpen: true,
      anchorEl: e.currentTarget,
    });
  };
  closePopover = () => {
    this.setState({
      addPopoverOpen: false,
    });
  };
  addMenuTap = (event, menuItem, index) => {
    event.preventDefault();
    console.log('AddMenuItem clicked',event, menuItem, index);
    this.setState({
      addPopoverOpen: false,
    });
    var model = {
      type: menuItem.props.value,
      state: 'new'
    };
    if(menuItem.props.value === 'endpoint'){
      model.name = '';
      model.url = ''
    }else{

    }
    this.props.onAddNew(model);
  };

  render(){
    return (
      <AppBar
        title="Cohesion"
        iconElementLeft={<IconButton><HomeIcon /></IconButton>}
        iconElementRight={
          <Toolbar className="Toolbar" style={toolBarStyle}>
            <ToolbarGroup firstChild={true}>
              <FlatButton icon={<SearchIcon/>}
              >
              </FlatButton>
              <TextField hintText="Search"/>
              <ToolbarSeparator />
            </ToolbarGroup>

            <ToolbarGroup lastChild={true}>
              <FlatButton onTouchTap={this.tapAdd} icon={<AddIcon/>} label="Add"></FlatButton>
              <Popover
                open={this.state.addPopoverOpen}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.closePopover}
              >
                <Menu onItemTouchTap={this.addMenuTap}>
                  <MenuItem primaryText="Endpoint" leftIcon={<EndpointIcon/>} value="endpoint"/>
                  <MenuItem primaryText="Rule" leftIcon={<RuleIcon/>} value="rule"/>
                </Menu>
              </Popover>
            </ToolbarGroup>
          </Toolbar>
        }
      >

      </AppBar>
    )
  }
}

export default Header;
