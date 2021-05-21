import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../Redux/authAction";

const TopBar = (props) => {
  const dispatch = useDispatch();
  const { store } = useSelector((store) => {
    return {
      store,
    };
  });
  const { isLoggedIn, displayName } = store;

  const onLogoutSuccess = () => {
    dispatch(logoutSuccess());
  };

  let link_ = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-link">
        <Link to="/login"> {"Login"} </Link>
      </li>
      <li className="nav-link">
        <Link to="/signup">{"Sign Up"} </Link>
      </li>
    </ul>
  );
  if (isLoggedIn) {
    link_ = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-link">
          <Link to="/">{displayName}</Link>
        </li>
        <li className="nav-link">
          <Link to="/" onClick={onLogoutSuccess}> {"Logout"} </Link>
        </li>
      </ul>);
  }

  return (
    <div className="shadow-sm bg-light mb-2">
      <nav className="navbar navbar-light container navbar-expand">
        <Link className="navbar-brand text-center animate__animated animate__flash" to="/">
        <i className="fas fa-crown"/><br/>
        Quiz Game
        </Link>
        {link_}
      </nav>
    </div>
  );
};

export default TopBar;
