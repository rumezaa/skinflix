import React from "react";
import { render } from "react-dom";
import Main from "../components/Main";
import { BrowserRouter } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  render(
      <Main />,
    document.body.appendChild(document.createElement("div"))
  );
});
