//movie card v 2.0
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Star from '@material-ui/icons/Star';
import ClassNames from 'classnames';
const styles = theme => ({
  card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      width: "350px",
      height: "550px",
      backgroundSize: "cover",
      position: "relative",
      alignContent: "space-between"

  },
  titleBar: {
    backgroundColor: "rgb(0, 0, 0, .6)",
    opacity: ".7",
    color: "white",
    width: "100%",
    height: "70px",
    bottom: "0",
    fontSize: "45",
    position: "absolute"
  },
  titleBarTitle: {
    color: "rgb(255, 255, 255)",
    zIndex: "999",
    fontSize: "90",
    marginLeft: "10px"
  },
  ratingCircle: {
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    justifyContent: "center",
    font: "100",
    backgroundColor: "rgb(246, 250, 47,0.8)",
    position: "absolute",
    top: "0",
    marginTop: "2px"
  },stars:{
    width: "100",
    color: "rgb(245, 126, 2)"
  },
  touchedStar: {
    color: "rgb(245, 126, 2)"
  },
  untouchedStar: {
    color: "white"
  },
  starsHolder: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: "0",
    top: "0"
  },
  starsnRaking: {
    backgroundColor: "yellow"
  },customRatingCircle: {
    backgroundColor: "rgb(107, 255, 77,.7)",
    marginTop: "70px"
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

  selectRank=(num)=>{
    this.setState({selectedRank: num})
  }

  getSelectedRank=()=>{
    return this.state.selectedRank
  }
  confirmRank=()=>{
    if(this.props.isLogged==="undefined"){
      alert("cannot rank this without login")
      return
    }
      this.props.voteForMovie(this.props.id,this.state.selectedRank)
  }
  render() {

    const {poster_path,title,vote_average,classes,ranking}=this.props;


    return (
        <div className={classes.card} style={{ backgroundImage: "url("+("https://image.tmdb.org/t/p/w400"+poster_path).replace(/\s/g,'')+")" }}>

            <div className={classes.ratingCircle}> <h2>{vote_average}</h2></div>
            {this.props.match.url==="/" && <div className={ClassNames(classes.ratingCircle,classes.customRatingCircle)}> <h2>{ranking}</h2></div> }

            {  (this.props.match.url==="/" && this.props.isLogged!=="undefined") && <div className={classes.starsHolder} onMouseLeave={this.leaveTheStar}>

              {! this.getToShowTheStars() &&   <IconButton onMouseEnter={this.touchTheStar} className={classes.stars}><Star />  </IconButton> }
              { this.getToShowTheStars()  &&
                  [1,2,3,4,5].map((num)=>{
                    return  <IconButton key={num} onMouseEnter={()=>this.selectRank(num)} onClick={this.confirmRank}  className={ ClassNames(classes.stars,(this.getSelectedRank()+1>num)?classes.touchedStar:classes.untouchedStar)}><Star  />  </IconButton>} )}
            </div>}}
          <div className={classes.titleBarTitle}> <h3> {title} </h3>
          </div>

          <div className={classes.titleBar}>  </div>


        </div>
    );
  }
}

export default  withStyles(styles)(MovieCard);
