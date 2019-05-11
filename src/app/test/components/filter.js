
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import MovieCard from './subcomponents/MovieCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import YearPicker from "react-year-picker";
import Styles from './Styles'
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import FormControlLabel from '@material-ui/core/FormControlLabel';
class Filter extends React.Component {

  state=({adult: this.props.filter?this.props.filter.adult:false, year: this.props.filter?this.props.filter.year:"2019"})
  handleChange=(e)=> {
    this.props.yearState(e.target.value)
  
}

handleAdultChage=()=>{
  
  this.props.adultState(this.props.filterParams?!this.props.filterParams.adult:true)
  
}

render() {
      const { classes } = this.props;
      const { moviesList } = this.props;
      
      let minOffset = 0, maxOffset = 100;
      let thisYear = (new Date()).getFullYear();
      let allYears = [];
      for(let x = 0; x <= maxOffset; x++) {
            allYears.push(thisYear - x)
        }

     const yearList = allYears.map((x) => {return(<MenuItem value={x} key={x}>{x}</MenuItem>)})


    return (

     <List component="div" disablePadding style={{display: this.props.match.url==="/dboard/admin/discover"&&this.props.display?"inline":"none"}}>
            <ListItem button className={classes.nestedList}>
                  <Select value={this.props.filterParams&&this.props.filterParams.year?this.props.filterParams.year:"2019"}  style={{width: "100%"}} onChange={(e)=>this.handleChange(e)} placeholder="year">
                        {yearList}
                  </Select>

            </ListItem>

               <ListItem button className={classes.nestedList}>
                      <FormControlLabel style={{width: "100%"}}
                    control={
                      <Checkbox checked={this.props.filterParams&&this.props.filterParams.adult?this.props.filterParams.adult:false} onChange={()=>this.handleAdultChage() } value="adult" />
                    }
                    label="Adult"
                  />
            </ListItem>


          </List>
    );
  }

}

export default  withStyles(Styles)(Filter);
