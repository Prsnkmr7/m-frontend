import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.scss";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header />
      </SafeComponent>
      <div className="m-10">
        <Routes>
          <Route path="/product/:id" element={<PDPContent />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
