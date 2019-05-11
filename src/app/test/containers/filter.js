import { connect } from 'react-redux';
import Filter from '../components/filter';
import { grapMoviesDataFromDb ,adult_state ,year_state} from '../actions/MoviesGrapper';
import { withRouter } from 'react-router-dom';

const mapStateToProps=(state)=>{ return {loading: state.loginReducer.loading , 
	moviesList: state.mainReducer.movies_list_buffer,
	filterParams: state.mainReducer.filter
}; }
const mapDispatchToProps = (dispatch) => {
  return{
    adultState: (approve)=> dispatch(adult_state(approve)),
    yearState: (year)=> dispatch(year_state(year))// more goes on here 
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Filter));
