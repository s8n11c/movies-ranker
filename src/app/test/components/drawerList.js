import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';

import AssignmentIcon from '@material-ui/icons/Assignment';
import Filter from '../containers/filter'
import Styles from '../components/Styles'


class ListItems extends React.Component {



  render() {
    
    return (

      <div>
        <ListItem button component="a" href="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="ListOFMovies" />
        </ListItem>
        <ListItem button component="a" href="/dboard/admin/discover">
          <ListItemIcon >
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Discover" />
        </ListItem>
        <Filter  display={this.props.display}/>
        <ListSubheader inset></ListSubheader>
        <ListItem button component="a" href="/login">
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={this.props.isLogged===undefined?"Login":"SignOut"}/>
        </ListItem>
      </div>
    );
  }

}

export default  withStyles(Styles)(ListItems);
