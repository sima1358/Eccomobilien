import React from "react";
import { list } from "../../data/data";
import './list.css'
 
export const ListCard = () => {
  return (
    <>
      <div className="container-listCard grid3-list mtop">
        {list.map((value, index) => {
          // ************
          // they come from data.js => "export const list"
          // if we want to write "const value = ...." we have to rewrite and repeat all the variables which are mentioned in data.js;
          // but here we can write our codes smallest and more cleanest that common way:
          // const value = {
          //     name: "Example Name",
          //     category: "Example Category",
          //     location: "Example Location",
          //     price: 100,
          //     type: "Example Type",
          //     cover: "Example Cover"
          //   };

          const { cover, category, location, name, price, type } = value;
          return (
            <div className="box-listCard shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category">
                  {/* in 'data.js'  we have two different values for "category: for sale && for rent" 
                    ALSO we have two different colors for "color" and "background-color",SPAN is an inline 
                    element ; we use conditionally set base on the value of category variable; if the
                    category is For Sale it uses this color otherwise it uses the other one */}
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                  <h4>{name}</h4>
                  <p>
                    <i className="fa fa-location-dot"></i>
                    {location}
                  </p>
                </div>
                <div className="button-listCard flex">
                  <div>
                    <button className="btn2">{price}</button>
                    <label htmlFor="">/m2</label>
                  </div>
                  <span>{type}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
