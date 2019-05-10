import {LOADING, NOT_LOADING , SUCCESSED_LOGIN,FAILED_LOGIN} from '../actions';
const InitialState={  isLogged: "undefined", loading: false};

const mainReducer = (state=InitialState, action) => {

  switch (action.type) {
    case LOADING:
      return {...state,loading: true}

    case 'ALREADY_LOGGED':
      return {...state,isLogged: {
        username: action.username,logged: true, role: action.role
      }}

    case 'SIGN_OUT':
        return InitialState

    case NOT_LOADING:
      return {...state,loading: false}

    case SUCCESSED_LOGIN:

      return {...state,isLogged: {
        username: action.username,logged: true, role: action.role
      }}
    case FAILED_LOGIN:
       return {...state,message: action.message}
    default:
      return state
  }
};
export default mainReducer;
