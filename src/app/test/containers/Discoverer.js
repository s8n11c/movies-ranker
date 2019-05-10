import { connect } from 'react-redux';
import Discoverer from '../components/Discoverer';
import { grapMoviesDataFromDb } from '../actions/MoviesGrapper';
import { withRouter } from 'react-router-dom';

const mapStateToProps=(state)=>{ return {loading: state.loginReducer.loading , moviesList: state.mainReducer.movies_list_buffer}; }
const mapDispatchToProps = (dispatch) => {
  return{
    grapMoviesDataFromDb: ()=> dispatch( grapMoviesDataFromDb() )
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Discoverer));
