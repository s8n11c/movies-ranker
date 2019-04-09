
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './ListItems';
import TopBar from './TopBar';
import styles from './Styles'
import Body from './Body';
import Discoverer from '../containers/Discoverer';



function PageRouter(match,props){

  switch (match) {
    case '/':
        return <Body moviesList={props.movies_list} grapMoviesFromFb={props.grapMoviesFromFb} isLogged={props.payload.isLogged} voteForMovie={props.voteForMovie}  match={props.match} loading={props.loading} />
    case '/dboard/admin/discover':
        return <Discoverer />
    default:
      return  <h1> there is no match </h1>
      }
}


class Dashboard extends React.Component {
  state = {
    open: false,
  };


  handleTrigger=()=>{
    this.setState({open: !this.state.open})
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

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />

        <TopBar drawerTrigger={this.handleTrigger} {...this.props}/>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleTrigger}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems(this.props)}</List>
        </Drawer>
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />

              {PageRouter(this.props.match.url,this.props)}
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Dashboard);
