import React from "react";

import Header from "./components/Header/Header";

import Noticias from "./Pages/Noticias/Noticias";
import Home from "./Pages/Home/Home";
import Wiki from "./Pages/Wiki/Wiki";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Header />
        <div className="py-24">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/noticias" Component={Noticias} />
            <Route path="/Wiki" Component={Wiki} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
