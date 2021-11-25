import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokemondetails from "./Pokemondetails";
import App from "../App";

function Routepath() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/pokemon/:name" element={<Pokemondetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routepath;
