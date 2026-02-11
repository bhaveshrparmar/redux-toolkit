import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routing from "./utils/Routing";

import Navbar from "./Food Pages/FoodNavbar";


export default function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          {Routing.map((p) => (
            <Route key={p.path} path={p.path} element={p.element} />
          ))}
        </Routes>

      </BrowserRouter>

    </>
  );
}
