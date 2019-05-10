import {sessionService} from 'redux-react-session';
import jwt from 'jsonwebtoken';
import {JWT_KEY} from '../../assets/configs/config'

export default  (store) => {
  sessionService.loadSession().then((session)=>  {
    
        jwt.verify(session,JWT_KEY,function(err,user){
          if(err) throw err;
          store.dispatch({type: 'ALREADY_LOGGED',username: user.username,role: user.role})
        })
      }).catch( (error)=>{console.log("not logged") ; })
}
