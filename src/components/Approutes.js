import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Recording from "./Recording";
import Notification from "./Notification";
import { Camerascreen } from "./Camerascreen";

import Dialogbox from "./Dialogbox";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Notification" element={<Notification />} />
      <Route path="/Recording" element={<Recording />} />
      <Route path="/Camerascreen" element={<Camerascreen />} />

      <Route path="/Dialogbox" element={<Dialogbox />} />
    </Routes>
  );
};

export default Approutes;
