import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import HabitationInformation from "./pages/Habitation-information";
import About from "./pages/About";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/BenjaminLesne_11_23112021/" element={<Home />} />

        <Route path="/BenjaminLesne_11_23112021/about" element={<About />} />
        <Route
          path="/BenjaminLesne_11_23112021/habitation-information"
          element={<HabitationInformation />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
