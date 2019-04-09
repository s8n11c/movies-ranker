import {loginRef} from '../../assets/configs/firebase';
import { sessionService } from 'redux-react-session';
import jwt from 'jsonwebtoken';
import {JWT_KEY} from "../../assets/configs/config";
export const TEST_ACTION='TEST_ACTION';
export const DO_LOGIN='DO_LOGIN';
export const SUCCESSED_LOGIN='SUCCESSED_LOGIN';
export const FAILED_LOGIN='FAILED_LOGIN';
export const LOADING='LOADING';
export const NOT_LOADING='NOT_LOADING';

export const successed_login=(username,role)=>{
  // set the session here
  //sure must be encrypted
  let token=jwt.sign({username, role},JWT_KEY,{expiresIn: 60*60*24});
  sessionService.saveSession(token)
  return({
  type: SUCCESSED_LOGIN,
  username: username,
  role: role
})
}
export const failed_login=(err_msg)=>({
  type: FAILED_LOGIN,
  message: err_msg
})
export const test_action = () => ({
  type: 'TEST_ACTION'
})

export const sign_out=()=>{
  sessionService.deleteSession();
  sessionService.deleteUser();

  return ({
    type: "SIGN_OUT"
  })
}

export const loading=()=>{
  return({
  type: LOADING
})}

export const not_loading=()=>({
  type: NOT_LOADING
})
export const do_login = (username,password,dispatch)=>{
  return ((dispatch)=>{
        // do login workflow inhere
    dispatch(loading());
    loginRef.once("value").then(function(snapshot) {
    let f=0;

    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      let usernameStored=(childData.username===undefined?"":childData.username.toString());
      let passwordStored=(childData.password===undefined?"":childData.password.toString());

      if(usernameStored===username&&passwordStored===password){

        dispatch(successed_login(username,childData.role))
        f=1;
      }

  });

    if(f===0){
      dispatch(failed_login("wrong user name or password"))
    }

    dispatch(not_loading())
  });


  })
}
