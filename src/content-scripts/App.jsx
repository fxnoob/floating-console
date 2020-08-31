import React from "react";
import ReactDOM from "react-dom";
import constants from "../../constants";
import Index from "./components";

const Element = document.createElement("div");
Element.setAttribute("id", constants.appConfig.contentScript.mountId);
document.body.appendChild(Element);
ReactDOM.render(
  <Index />,
  document.getElementById(constants.appConfig.contentScript.mountId)
);
