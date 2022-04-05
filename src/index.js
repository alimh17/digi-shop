import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import MainLayouts from "./layouts/MainLayouts";

import App from "./App";

// stylesheet
import "./index.css";
import "@splidejs/splide/dist/css/splide.min.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <MainLayouts>
      <App tab="home" />
    </MainLayouts>
  </BrowserRouter>
);
