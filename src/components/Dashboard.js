import React, { useContext } from "react";

import "../Styling/Dashboard.css";
import { context } from "../App";

function Dashboard() {
  const handleConnectButton = () => {
    window.location.href = "/Camerascreen";
  };
  const { Notifications } = useContext(context);
  return (
    <div className="Dashboardscreendata">
      <div className="content">
        <img src="image10.png" alt="Background" className="backAIimage" />
        <div className="overlay">
          <div className="text-overlay">
            <p>Welcome to secure AI</p>
            <p>
              Stay protected and empowered with SafeGuardAI,
              <br /> the cutting-edge app powered by artificial
              <br />
              intelligence that helps detect and prevent violence in
              <br /> your surroundings.
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="connectbutton"
          onClick={handleConnectButton}
        >
          Connect CCTV
        </button>
      </div>
      <div className="notificationbox">
        <h5>Notification</h5>
        {Notifications.map((Notificatin, index) => (
          <div key={index} className="notification-item">
            <div className="circle">
              <div className="inner-circle"></div>
            </div>
            <div className="square">
              <p className="notification-text">{Notificatin.message}</p>
              <p className="notification-time">{Notificatin.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
