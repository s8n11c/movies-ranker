
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


import FormControlLabel from '@material-ui/core/FormControlLabel';
class Filter extends React.Component {

  state=({adult: false, year: "2019"})
  handleChange=(e)=> {
    this.setState({year: e.target.value})
    this.confirmSearch()
}

handleAdultChage=()=>{
  this.setState({adult: !this.state.adult})
  this.confirmSearch()
}


confirmSearch=()=>{

  console.log("begin searching with : - ")
  console.log(this.state.adult ,"------", this.state.year)
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
      <div style={{display: this.props.match.url==="/dboard/admin/discover"&&this.props.display?"inline":"none"}}>

        <ListItem button>

          <Select value={this.state.year}  onChange={(e)=>this.handleChange(e)} placeholder="year">
            {yearList}
            </Select>
            <FormControlLabel
                    control={
                      <Checkbox checked={this.state.adult} onChange={()=>this.handleAdultChage() } value="adult" />
                    }
                    label="Adult"
                  />
        </ListItem>
  </div>
    );
  }

}

export default  withStyles(Styles)(Filter);
