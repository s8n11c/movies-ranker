
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import Backup from '@material-ui/icons/Backup';
import PersonIcon from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';







import styles from './Styles'




class TopBar extends React.Component {
  state = {
    open: false,
  };


  handleTrigger=()=>{
    this.setState({open: !this.state.open})
    this.props.drawerTrigger();
  }



  renderRedirect = () => {

  return   <IconButton  onClick={this.props.signOut} color="inherit">
        <PersonIcon/>
    </IconButton>
  }

  renderLock=()=>{
    return <IconButton href="/login" color="inherit">
      <Lock />
    </IconButton>
  }

  renderAdminControlButtons=()=>{

    if(this.props.match.url==="/dboard/admin/discover" && (this.props.payload.isLogged.role==="admin")){

      return <IconButton onClick={ (movies)=>this.props.moveFromBufferToDB(this.props.movies_list_buffer) } color="inherit">
        <Backup />
    </IconButton>
  }
  }


  render() {
    const { classes } = this.props;
    return (
        <AppBar
          position="absolute"
          className={classNames(classes.appBar)}
        >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
          <IconButton onClick={this.handleTrigger}
              className={classNames(!this.state.open&&classes.menuButtonHidden)}
          >
            <ChevronLeftIcon />
          </IconButton>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleTrigger}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Movies Ranker
            </Typography>

                            {this.renderAdminControlButtons()}


                            {this.props.payload.isLogged!=="undefined"?this.renderRedirect():this.renderLock()}


          </Toolbar>
        </AppBar>

    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TopBar);
