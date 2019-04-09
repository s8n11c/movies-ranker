import { connect } from 'react-redux';
import ComeBack from '../components';
import { test_action } from '../actions';
import { sign_out} from '../../login/actions';
import { withRouter } from 'react-router-dom';
import {move_from_buffer_to_fb,grapMoviesFromFb,voteForMovie } from '../actions/MoviesGrapper';

const mapStateToProps=(state)=>{ return {loading: state.loginReducer.loading, payload : state.loginReducer,
   movies_list_buffer: state.mainReducer.movies_list_buffer,
   movies_list: state.mainReducer.movies_list

 }; }
const mapDispatchToProps = (dispatch) => { return {
  onClick: () => dispatch(test_action()) ,
  signOut: ()=>dispatch(sign_out()),
  moveFromBufferToDB: (movies)=> dispatch( move_from_buffer_to_fb(movies) ),
  grapMoviesFromFb: ()=>dispatch(grapMoviesFromFb()),
  voteForMovie: (id,vote)=>dispatch(voteForMovie(id,vote))
} }

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ComeBack));
