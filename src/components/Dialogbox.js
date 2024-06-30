import React from "react";
import "./Model.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Button } from "antd";
import { context } from "../App";

function Modal({ isOpen, onClose, filelink, delNotification }) {
  const navigate = useNavigate(); // Get the navigate function
  const { Notifications, setNotifications } = React.useContext(context);
  const notifications = localStorage.getItem("Notifications");
  const notificationsparsed = JSON.parse(notifications);
  const handleCancel = () => {
    navigate("/Recording");
    onClose();
  };

  const handleyes = (event) => {
    if (filelink) {
      try {
        fetch(`http://localhost:5000/delete/${filelink}`);
      } catch {
        alert("File Is Already deleted, wait for database to be fetched again");
      }
      navigate("/Recording");
    }
    if (delNotification) {
      const newNotification = notificationsparsed.filter(
        (Notification) => Notification.id !== delNotification
      );
      localStorage.setItem("Notifications", JSON.stringify(newNotification));
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-custom">
      <div className="Dailogbox-cont-custom">
        <div className="fontstlying">
          <p>Alert</p>
          <p className="fontstlyings">
            Are you sure you want to Delete this <br /> notification?
          </p>
        </div>

        <div className="dialogbox-button-group">
          <button
            type="submit"
            className="Dailogboxpassword-button-custom"
            onClick={handleyes}
          >
            Yes, Continue
          </button>
          <button
            type="button"
            className="Dailogboxpassword-button-custom cancel-button-custom"
            onClick={handleCancel}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
