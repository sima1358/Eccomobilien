import React from "react";
import "../Home/HomePage/homePage.css";

export const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className="heading">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
};
