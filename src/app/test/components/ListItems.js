
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';

import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
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
  </div>
);

export const secondaryListItems =(props)=> {
  return(
  <div>
    <ListSubheader inset></ListSubheader>
    <ListItem button component="a" href="/login">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary={(props.payload.isLogged ==="undefined")?"login":"singout"}
 />
    </ListItem>
  </div>
)};
