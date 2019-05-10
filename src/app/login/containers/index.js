import { connect } from 'react-redux';
import Login from '../components';
import { test_action ,do_login} from '../actions';

import { withRouter } from 'react-router-dom';

const mapStateToProps=(state)=>{ return {loading: state.loginReducer.loading, payload : state.loginReducer}; }
const mapDispatchToProps = (dispatch) => {
    return {
      onClick: () => dispatch(test_action()) ,
      doLogin: (username,password)=> dispatch(do_login(username,password))}
     }
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));
