import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LoginUi from "./Login Ui/LoginUi";
import RegisterUi from "./Register/RegisterUi";

ReactDOM.render(
  <div>
    <RegisterUi />
    <LoginUi />
  </div>,

  document.getElementById("root")
);
