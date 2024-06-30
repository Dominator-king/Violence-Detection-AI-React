import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import "../Styling/SignIn.css";
import { doSignInWithEmailAndPass } from "./auth";
import { useAuth } from "./useAuth";
function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signingIn, setSigningIn] = useState(false);
  const { userLoggedIn } = useAuth();
  const handleSignIn = (event) => {
    event.preventDefault();
    if (!signingIn) {
      setSigningIn(true);
      doSignInWithEmailAndPass(username, password)
        .then((user) => {
          if (user.email) {
            console.log("User signed in:", user);
            navigate("/Dashboard");
          } else {
            alert("Invalid Email or Password");
          }
        })
        .catch((error) => {
          console.error("Error signing in:", error);
          alert("Error signing in:", error);
        })
        .finally(() => {
          setSigningIn(false);
        });
    }
  };

  return (
    <div className="container">
      {userLoggedIn && <Navigate to="/Dashboard" replace={true} />}
      <div className="left-side">
        <img src="backimage.png" alt="Background" className="backimage" />
        <div className="content">
          <h1 className="title">SecureScan</h1>
          <img src="newimage.png" alt="SecureScan" className="centered-image" />
          <p className="description">
            Enter your credentials to
            <br />
            sign in to your Account
          </p>
          <p className="sub-description">
            Your safety and privacy are our top priorities.
          </p>
        </div>
      </div>
      <div className="right-side">
        <form className="signup-form" onSubmit={handleSignIn}>
          <h2 className="main">
            Welcome back to the
            <br /> SecureScan
          </h2>
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              placeholder="Muqadsa"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="*****"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="forgot-password-link">
              <Link to="/forgetpassword">Forgot Password?</Link>
            </p>
          </div>
          <button type="submit" disabled={signingIn} className="button">
            SIGN IN
          </button>
          <p className="login-link">
            Don't have an account? <Link to="/signup">SIGN UP</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
