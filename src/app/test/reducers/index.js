import {TEST_ACTION} from '../actions';
import {Rainbow} from '../../assets/multiCss';
const InitialState={welcome: "Home", movies_list_buffer: undefined , filter: undefined};

const mainReducer = (state=InitialState, action) => {

  switch (action.type) {

    case TEST_ACTION:

      //console.log('%c Action performed  ', 'background: #222; color: #bada55');

      console.log("%c Action performed ", Rainbow );
      return state



      /*
        THis is reducers about mutating the state based on API grapped values
        Be carful
        /m\!/m\
      */
      case "FB_DATA_GATHERED":

        action.data.forEach((movie,index)=>{
            if(movie.ranking===undefined){
                action.data[index].ranking=0;
            }else{
              let rankval=0,rankBuffer=0;
              for (var rank in movie.ranking) {
                    if(movie.ranking[rank]>rankval){
                        rankval=movie.ranking[rank]
                        rankBuffer=rank
                    }
                }
                action.data[index].ranking=rankBuffer;
              }
            })

        return {...state,movies_list: action.data}
      case "DATA_UPDATED":

      return state
      case "DISC_GATHERED":
        return {...state, movies_list_buffer: action.data}
      case "DISC_ERROR":

      return {...state , error: "something happened wrong while grapping the data"}

      case "ADULT_STATE":

        return {...state,filter: {...state.filter,adult: action.state}}

      
      case "YEAR_STATE":
        return {...state, filter: {...state.filter,year: action.year}}  
    default:
      return state
  }
};
export default mainReducer
