import React from "react";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import HomePage from "../Pages/HomePage";
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import TopBar from "../Components/TopBar";
import { useSelector } from "react-redux";
import GamePage from "../Pages/GamePage";
import ReviewPage from "../Pages/ReviewPage";
const App =() => {
  
  const { isLoggedIn } = useSelector((store)=>{
    return{
      isLoggedIn : store.isLoggedIn
    }
  });

  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {!isLoggedIn &&<Route path="/login" component={LoginPage} />}
          <Route path="/signup" component={SignUpPage} />
          <Route path="/game" component={GamePage}/>
          <Route path="/review" component={ReviewPage}/>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
  
}



export default App;
