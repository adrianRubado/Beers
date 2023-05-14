import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Beers from "./components/Beers";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
