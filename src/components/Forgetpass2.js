import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import'../Styling/Forgetpass2.css';

function Forgetpass2() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleCancel = () => {
    navigate('/');
  };

  const handleReset = (event) => {
    event.preventDefault();
    // Handle password reset logic here
    navigate('/signup');
  };

  return (
    <div className="forgetpass2-container">
      <div className="forgetpass2-left-side">
        <img src="backimage.png" alt="Background" className="forgetpass2-backimage" />
        <div className="forgetpass2-content">
          <h1 className="forgetpass2-title">SecureScan</h1>
          <img src="newimage.png" alt="SecureScan" className="forgetpass2-centered-image" />
          <p className="forgetpass2-description">
            Enter your credentials to<br />sign in to your Account
          </p>
          <p className="forgetpass2-sub-description">
            Your safety and privacy are our top priorities.
          </p>
        </div>
      </div>
      <div className="forgetpass2-right-side">
        <h2 className="forgetpass2-main">Forgot password</h2>
        <p className="forgetpass2-text">Enter your email account to<br /><span className="left-margin">reset your password</span></p>
        <div className="forgetpass2-cont">
            <div className="forgetcircle">
            <img src="image8.png" alt="notification" className="forgetimages" />
            </div>
            <p className="check-email-text">Check your email</p>
          <p className="instructions-text">
            We have sent password recovery instructions to your email.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Forgetpass2;
