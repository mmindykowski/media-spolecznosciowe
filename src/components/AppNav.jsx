import axios from "axios";
import "./AppNav.css";

import { Link } from "react-router-dom";

const AppNav = (props) => {
  const logOut = (e) => {
    e.preventDefault();
    axios
      .post("http://akademia108.pl/api/social-app/user/logout")
      .then((res) => {
        props.setUser(null);
        localStorage.setItem("user", null);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="mainNav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        {!props.user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!props.user && (
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        )}
        {props.user && (
          <li>
            <Link to="/" onClick={logOut}>Log out</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default AppNav;
