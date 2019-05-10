
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
    height: "auto",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});


class Body extends React.Component {

  componentDidMount(){
    this.props.grapMoviesFromFb()
  }


  render() {
      const { classes } = this.props;
      const { moviesList } = this.props;
    return (
      <div className={classes.root}>
    {  this.props.loading && <CircularProgress  color="secondary" /> }
    { !this.props.loading&&<GridList  className={classes.gridList}>
        {moviesList===undefined? <p> loading </p>: moviesList.map((movie,index)=>{
            return <MovieCard ranking={movie.ranking} match={this.props.match} id={movie.id} voteForMovie={this.props.voteForMovie} isLogged={this.props.isLogged} title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average} key={index} /> }) }

    </GridList> }
  </div>
    );
  }
}

export default  withStyles(styles)(Body);
