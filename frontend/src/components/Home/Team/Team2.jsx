import React from "react";
import "./team.css";
import { Heading } from "../../Heading/Heading";
import { team } from "../../data/data.js";

export const Team2 = () => {
  return (
    <>
      <section className="team background ">
        <div className="container">
          <Heading
            title="Our Featured Agent"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <div className="teamTable teamList">
            {team.map((val, index) => {
              return (
                <div className="box" key={index}>
                  <div className="details">
                    <div className="img">
                      <img src={val.cover} alt="" />
                      <i className="fa fa-circle-check"></i>
                    </div>
                    <i className="fa fa-location-dot"></i>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>
                    <div className="teamInputMessage">
                      <h5>Write a message for our team here ...</h5>
                      <input className="teamInput" type="text" placeholder="" />
                      <button className="btn-ms">Message</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
