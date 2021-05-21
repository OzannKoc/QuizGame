import * as ACTIONS from "./Constants";
const defaultState = {
    isLoggedIn : false,
    username : undefined,
    displayName : undefined,
    password : undefined,
    reviewGame : []
  }

const authReducer = (state={...defaultState},action)=>{
  if(action.type === ACTIONS.LOGOUT_SUCCESS){
    return defaultState ;
  }
  else if (action.type === ACTIONS.LOGIN_SUCCESS){
    state = {
      ...action.payload
    }
    return state;
  }
  else if (action.type === ACTIONS.REVIEW_QUIZ){
    state = {
      ...action.payload
    }
    return state;
  }
  return state;
}
export default authReducer;