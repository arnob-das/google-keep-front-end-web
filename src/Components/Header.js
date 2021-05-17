import React, { useContext } from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";

function Header() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  const handleGoogleSignOut = () => {
    firebase.auth().signOut()

      .then(function () {
        setLoggedInUser({
          name: ' ',
          email: '',
        })
      }).catch(function (error) {
      });
  }


  return (
    <nav className="navbar navbar-expand-sm navbar-light header">
      <Link className="navbar-brand" to="/"><h1><HighlightIcon /> Keeper</h1></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">

        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {loggedInUser.name}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <button className="dropdown-item btn btn-warning" onClick={handleGoogleSignOut}>Log Out</button>
        </div>
      </li>

        </ul>
      </div>
    </nav>
  );

}

export default Header;
