import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import MovieCard from './subcomponents/MovieCard';

import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "auto"
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  stars:{
    width: "2%",
    color: "rgb(245, 126, 2)"
  }
});


class Discoverer extends React.Component {

  componentDidMount(){
       this.props.grapMoviesDataFromDb()
  }

  render() {

      const { classes } = this.props;
      const { moviesList } = this.props;

    return (
      <div className={classes.root}>

    {  this.props.loading && <CircularProgress  color="secondary" /> }
    {  !this.props.loading && <GridList  className={classes.gridList}>

        {moviesList===undefined?<h1> nothing to show </h1>: moviesList.map((movie,index)=>{

          return <MovieCard match={this.props.match} title={movie.title} key={index} vote_average={movie.vote_average} poster_path={movie.poster_path} />
        })}
    </GridList> }
  </div>
    );
  }
}
export default  withStyles(styles)(Discoverer);
