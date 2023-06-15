import React from "react";
import {HomePage} from './HomePage/HomePage'
import { Featured} from "./Featured/Featured";
import {List} from "./List/List"
 
export const Home = () => {
  return (
    <>
      <HomePage />
      <Featured/>
      <List />
    </>
  );
};


