import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <NavBar />
  </React.StrictMode>
);
