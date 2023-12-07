import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StrictMode } from "react";
//fonts.google.com'dan eklenen Londrina ve Barlow fontları burada import ediliyor.
const style = document.createElement("style");
style.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow&family=Londrina+Solid:wght@300&display=swap');
`;
document.head.appendChild(style);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
