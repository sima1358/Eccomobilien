import React from "react";
import "./homePage.css";
import { Heading } from "../../Heading/Heading";

export const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search for Next Home"
            subtitle="Find new and featured property located in your local city"
          />

          <form className="flex">
            {/* input city and street */}
            <div className="box">
              <span>City/Street</span>
              <input type="text" placeholder="Location" />
            </div>

            {/* input property type */}
            <div className="box">
              <span>Property Type</span>
              <input type="text" placeholder="Property Type" />
            </div>

            {/* input price range */}
            <div className="box">
              <span>Price Range</span>
              <input type="text" placeholder="Price Range" />
            </div>

            <div>
              <h4>Advance Filter</h4>
            </div>
            <button className="btn">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
