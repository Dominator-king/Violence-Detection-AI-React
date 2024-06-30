import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styling/RecordingScreen.css";
import Dialogbox from "./Dialogbox";

function Recording() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchVideos = () => {
      fetch("http://localhost:5000/captured_videos")
        .then((response) => response.json())
        .then((data) => {
          setVideos(data.videos);
        })
        .catch((error) => console.error("Error fetching videos:", error));
    };

    const intId = setInterval(fetchVideos, 5000);
    return () => clearInterval(intId);
  }, []);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="recording-container">
      <h5> violence Recording</h5>
      {videos.length != 0 ? (
        videos.map((video, index) => {
          const stamp = video
            .split("captured_video_")[1]
            .split("_")[2]
            .split("-");
          return (
            <div key={index} className="recording-item">
              <div className="icon-wrapper">
                <img src={"image3.png"} alt="icon" className="icon" />
              </div>
              <div className="text-wrapper">
                <div className="text-content">
                  <p className="recording-message">Recording</p>
                  <a href={`http://localhost:5000/download/${video}`}>
                    <p className="rerdingvideo">Download and Play Video</p>
                  </a>
                </div>
                <p className="time-stamp">{stamp[0] + ":" + stamp[1]}</p>
                <img
                  src={"image18.png"}
                  alt="symbol"
                  className="deletesymbol"
                  onClick={openModal}
                />
                <Dialogbox
                  filelink={video}
                  isOpen={isModalOpen}
                  onClose={closeModal}
                />
              </div>
            </div>
          );
        })
      ) : (
        <p>No Recordings available , updating to check for new videos....</p>
      )}
    </div>
  );
}

export default Recording;
