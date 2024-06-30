import React, { useEffect, useRef, useState, useContext } from "react";
import "../Styling/Camerascreen.css";
import { context } from "../App";

export const Camerascreen = () => {
  const { Notifications, setNotifications } = useContext(context);
  const notRef = useRef(0);
  if (Notifications.length > 0) {
    notRef.current = Notifications.length;
  }
  const videoRef = useRef(null);
  const [label, setLabel] = useState("");
  const [labelToShow, setLabelToShow] = useState("");
  const capture_labels = [
    "violence in office",
    "street violence",
    "fight on a street",
    "fire on a street",
    "car crash",
  ];

  const lastUpdateRef = useRef(Date.now()); // Reference to store the last update time
  const notificationTimeoutRef = useRef(null); // Reference to store the timeout ID

  useEffect(() => {
    videoRef.current.src = "http://localhost:5000/video_feed";
    const fetchLabel = () => {
      fetch("http://localhost:5000/label")
        .then((response) => response.json())
        .then((data) => setLabel(data.label))
        .catch((error) => console.error("Error fetching label:", error));
    };

    const intervalId = setInterval(fetchLabel, 50); // Fetch label every 50ms

    return () => {
      clearInterval(intervalId); // Cleanup interval
      if (videoRef.current) {
        videoRef.current.src = ""; // Stop video feed
      }
    };
  }, []);

  useEffect(() => {
    const currentTime = Date.now();

    const addNotification = () => {
      const newNotification = {
        id: notRef.current + 1,
        message: "Violence Detected",
        time: new Date().toLocaleTimeString(),
      };

      setNotifications((notifications) => [...notifications, newNotification]);

      const updatedNotifications = [...Notifications, newNotification];
      localStorage.setItem(
        "Notifications",
        JSON.stringify(updatedNotifications)
      );

      lastUpdateRef.current = currentTime; // Update the last update time
      notificationTimeoutRef.current = setTimeout(() => {
        notificationTimeoutRef.current = null; // Clear the timeout reference after 1 second
      }, 1000);
    };

    if (capture_labels.includes(label?.toLowerCase())) {
      setLabelToShow("Violence Detected");

      if (notificationTimeoutRef.current === null) {
        // If there's no active timeout
        addNotification();
      }
    } else {
      setLabelToShow("No Violence Detected");
    }
  }, [label, Notifications, setNotifications]);

  return (
    <div className="Camerascreen">
      <img ref={videoRef} alt="Camera" className="cameraimages" />
      <h3
        className={`label ${
          labelToShow === "Violence Detected"
            ? "violenceDetected"
            : "violenceNotDetected"
        }`}
      >{`videoStatus : ${labelToShow} `}</h3>
    </div>
  );
};
