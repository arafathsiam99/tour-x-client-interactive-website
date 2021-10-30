import { getAuth } from "@firebase/auth";
import React from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import initializeAuthentication from "../Hooks/firebase.init";
import Usefirebase from "../Hooks/UseFirebase";

initializeAuthentication();

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/booking";
  const auth = getAuth();
  const { user, googleSignIn, setUser } = Usefirebase();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      setUser(result.user);
    });
    history.push(redirect_uri);
  };
  return (
    <div>
      <div className="login-box d-flex align-items-center justify-content-center">
        <div className="login">
          <div className="login-box">
            <h2 className="custom-font">Please Login</h2>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-success w-80"
            >
              Google Sign In
            </button>
            <Link to="/register"> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
