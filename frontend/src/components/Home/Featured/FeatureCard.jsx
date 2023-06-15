import React from "react";
import { featured } from "../../data/data";

export const FeatureCard = () => {
  return (
    <>
      <div className="content grid3-feature mtop">
        {/* ******** */}
        {/* featured comes from data.js; 
        'cover' is the path of the image for each card 
        and 'total' is the property for each card 
        'map' is using to loop iterates over them */}
        {featured.map((items, index) => (
          <div className="box" key={index}>
            <img src={items.cover} alt="" />
            <h4>{items.name} </h4>
            <label>{items.total} </label>
          </div>
        ))}
      </div>
    </>
  );
};
