import React, { useState } from "react";
import "../Styling/Notification.css";
import Dialogbox from "./Dialogbox";
import { context } from "../App";

function Alert() {
  const notifications = localStorage.getItem("Notifications");
  const notificationsparsed = JSON.parse(notifications);
  console.log(notificationsparsed);
  const { Notifications } = React.useContext(context);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="alert-container">
      <h5>Alert</h5>
      {notificationsparsed ? (
        notificationsparsed.map((Notification, index) => (
          <div key={index} className="alert-item">
            <div className="symbol-container">
              <img src={"image7.png"} alt="symbol" className="symbol" />
            </div>
            <div className="message-container">
              <p className="alert-message">{Notification.message}</p>
              <p className="time-stampnotification">{Notification.time}</p>

              <img
                src={"image18.png"}
                alt="symbol"
                className="deletesymbol"
                onClick={openModal}
              />
              <Dialogbox
                delNotification={Notification.id}
                isOpen={isModalOpen}
                onClose={closeModal}
              />
            </div>
          </div>
        ))
      ) : (
        <p>No notifications</p>
      )}
    </div>
  );
}

export default Alert;
