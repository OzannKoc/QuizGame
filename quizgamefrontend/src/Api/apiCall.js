import axios from "axios";

export const signUp = (user) => {
  return axios.post("/api/users", user);
};
export const login = (creds) => {
  return axios.post("/api/auth", {}, { auth: creds  });
};
export const getUsers=()=>{
  return axios.get("/api/users");
}
export const setAuthorizationHeader = ({username , password,isLoggedIn})=>{
  if(isLoggedIn){
    const authUser = `Basic ${btoa(username+":"+password)}`
    axios.defaults.headers["Authorization"] = authUser;
  }else{
    delete axios.defaults.headers["Authorization"];
  }
}
export const getUser = (username)=>{
  return axios.get(`/api/users/${username}`);
}

export const startGame = () =>{
  return axios.get("/api/game");
}
export const saveGameResult = (game) =>{
  return axios.post("/api/game/save",game);
}
export const getGameResults = () =>{
  return axios.get("/api/game/results");
}
export const getGameResultsByUsername = (username) =>{
  return axios.get(`/api/game/${username}`);
}