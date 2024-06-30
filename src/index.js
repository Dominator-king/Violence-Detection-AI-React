import React from "react";
import ReactDOM from "react-dom";
import "./global.css"; // Import the global CSS file
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/useAuth";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
