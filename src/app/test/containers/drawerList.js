import { connect } from 'react-redux';
import DrawerList from '../components/drawerList';
import { grapMoviesDataFromDb } from '../actions/MoviesGrapper';
import { withRouter } from 'react-router-dom';

const mapStateToProps=(state)=>{ return {loading: state.loginReducer.loading ,
        moviesList: state.mainReducer.movies_list_buffer,
        isLogged: state.mainReducer.isLogged
      }; }
const mapDispatchToProps = (dispatch) => {
  return{
    grapMoviesDataFromDb: ()=> dispatch( grapMoviesDataFromDb() )
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DrawerList));
