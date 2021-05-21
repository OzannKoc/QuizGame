import * as ACTIONS from "./Constants";
import {login,signUp} from "../Api/apiCall";

export  const logoutSuccess = () =>{
    return  {
        type : ACTIONS.LOGOUT_SUCCESS
      }
}
export const loginSuccess = (user) =>{
    return{
      type : ACTIONS.LOGIN_SUCCESS,
      payload : {
        ...user
      }
    }
}
export const reviewQuiz = (store,quiz) =>{
  return{
    type : ACTIONS.REVIEW_QUIZ,
    payload : {
      ...store,
      reviewGame : quiz
    }
  }
}
export const loginHandler = (crediantials)=>{
  return async function(dispatch){
      const response = await login(crediantials);
      const user = {
          ...response.data,
          isLoggedIn : true,
          password : crediantials.password
      }
      dispatch(loginSuccess(user));
    return response ;
  } 
}
export const SignupHandler= (userBody)=>{
  return async function(dispatch){
    const response = await signUp(userBody);
    await dispatch(loginHandler(userBody));
    return  response ;
  }
}