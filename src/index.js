import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import MainLayouts from "./layouts/MainLayouts";

import App from "./App";

// stylesheet
import "./index.css";
import "@splidejs/splide/dist/css/splide.min.css";

render(
  <MainLayouts>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainLayouts>,
  document.getElementById("root")
);
