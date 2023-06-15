import React from "react";
import { Header } from "../header/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {Home} from "../Home/Home";

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          
          <Route  path="/" Component={Home} />
        </Routes>
      </Router>
    </>
  );
};

 
