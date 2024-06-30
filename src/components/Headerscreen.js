import React, { useEffect } from "react";
import "../Styling/Headerscreen.css";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";
const currentDate = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});
const currentTime = new Date().toLocaleTimeString("en-US");

function Headerscreen() {
  const { user, userLoggedIn } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      header.classList.toggle("sticky", window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      {!userLoggedIn && <Navigate to="/" />}
      <div className="header-row">
        <div className="left-section">
          <h1>SecureScan</h1>
          <p>{currentTime}</p>
          <p>{currentDate}</p>
        </div>
        <div className="right-section">
          <img src="image6.png" alt="Logo" className="logo" />
          <p>{user?.email}</p>
        </div>
      </div>
    </header>
  );
}

export default Headerscreen;
