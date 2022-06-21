import React from "react";
import "./index.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./Cart";
import View from "./View";
import Slider from "./Slider";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Slider />} />
        <Route path="cart" element={<Cart />} />
        <Route path="view" element={<View />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
