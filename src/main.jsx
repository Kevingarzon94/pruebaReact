import React from "react";
import ReactDOM from "react-dom/client";
import { Userinfo } from "./Userinfo.jsx";
import { Counter } from "./counter.jsx";
import { LoginForm } from "./LoginForm.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Userinfo name="Kevin" age="25" email="kevingarzon4@gmail.com" />
    <Counter />
    <LoginForm />
  </React.StrictMode>
);
