
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Star from '@material-ui/icons/Star';
import Avatar from '@material-ui/core/Avatar';
const styles = theme => ({
titleBar: {
  background:"none"
},
avatar: {
  backgroundColor: "rgba(251, 249, 14, 0.74)"
},
customTitleBar: {
  background: "none",
  marginTop: "20%"
},
customAvatar: {
  backgroundColor: "rgb(57, 252, 16)"
},stars:{
  width: "2%",
  color: "rgb(245, 126, 2)"
}
});





class MovieCard extends React.Component {

  constructor(props){
    super(props);
    this.state=({openl: false})
  }
  touchTheStar=()=>{

    this.setState({openl: true})

  }

  leaveTheStar=()=>{

    this.setState({openl: false})
  }

  getToShowTheStars=()=>{
    return this.state.openl
  }

  render() {

    const {poster_path,index,title,vote_average,classes}=this.props;

    return (
      <GridListTile  key={title}>

              <img  width={280}  src={("https://image.tmdb.org/t/p/w300"+poster_path).replace(/\s/g,'')} />
              <GridListTileBar
              onMouseLeave={this.leaveTheStar}
                titlePosition="top"
                actionIcon={
                  <div>
                  <IconButton>
                    <Avatar
                      className={classes.avatar}

                    >{vote_average}</Avatar>
                  </IconButton>
                {! this.getToShowTheStars() &&   <IconButton onMouseEnter={this.touchTheStar} className={classes.stars}><Star />  </IconButton> }
                  { this.getToShowTheStars()  &&
                    [1,2,3,4].map((num)=>{

                    return  <IconButton key={num} className={classes.stars}><Star />  </IconButton>

                    } )
                  }
                  </div>
                }
                className={classes.titleBar}
                actionPosition="left"
              />

              <GridListTileBar
                titlePosition="top"
                actionIcon={
                  <IconButton>
                    <Avatar
                      className={classes.customAvatar}
                    >{vote_average}</Avatar>
                  </IconButton>
                }
                className={classes.customTitleBar}
                actionPosition="left"
              />


              <GridListTileBar
                title={title}
              />






            </GridListTile>
    );
  }
}

export default  withStyles(styles)(MovieCard);
