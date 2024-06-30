import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Styling/Forgetpassword.css";
import { doResetPassword } from "./auth";

function Forgetpassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleCancel = () => {
    navigate("/");
  };

  const handleReset = async (event) => {
    event.preventDefault();
    await doResetPassword(email);
    alert(
      "Password reset email sent, if you Had an account you will receive an email to reset your password."
    );
    navigate("/");
  };

  return (
    <div className="forgetpassword-container">
      <div className="forgetpassword-left-side">
        <img
          src="backimage.png"
          alt="Background"
          className="forgetpassword-backimage"
        />
        <div className="forgetpassword-content">
          <h1 className="forgetpassword-title">SecureScan</h1>
          <img
            src="newimage.png"
            alt="SecureScan"
            className="forgetpassword-centered-image"
          />
          <p className="forgetpassword-description">
            Enter your credentials to
            <br />
            sign in to your Account
          </p>
          <p className="forgetpassword-sub-description">
            Your safety and privacy are our top priorities.
          </p>
        </div>
      </div>
      <div className="forgetpassword-right-side">
        <h2 className="forgetpassword-main">Forgot password</h2>
        <p className="forgetpassword-text">
          Enter your email account to
          <br />
          <span className="left-margin">reset your password</span>
        </p>
        <form className="forgetpassword-form" onSubmit={handleReset}>
          <div className="forgetpassword-input-group">
            <input
              type="email"
              placeholder="muqadsazaheen30@gmail.com"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="forgetpassword-button-group">
            <button
              type="button"
              className="forgetpassword-button cancel-button"
              onClick={handleCancel}
            >
              CANCEL
            </button>
            <button type="submit" className="forgetpassword-button">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forgetpassword;
