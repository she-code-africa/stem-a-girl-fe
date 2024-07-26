import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga4";
import Modal from "react-modal";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_G_TAG_ID);

// Set the app element for react-modal
Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById("root"));

// Send pageview with a custom path
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "App-views",
});

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
