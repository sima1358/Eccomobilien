import React from "react";
import { HomePage } from "./HomePage/HomePage";
import { Featured } from "./Featured/Featured";
import { List } from "./List/List";
 import {Team2} from './Team/Team2'
// import { Footer } from "./Footer/Footer";


export const Home = () => {
  return (
    <>
      <HomePage />
      <Featured />
      <List />
     <Team2 />
      {/* <Footer /> */}
    </>
  );
};
