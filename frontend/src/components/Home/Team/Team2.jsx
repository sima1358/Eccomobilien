import React from "react";
import './team.css'
import { Heading } from "../../Heading/Heading";
import {team} from '../../data/data.js';



export const Team2 = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading title="Our Featured Agent"
                 subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>

            <div className="teamTable">
                {team.map((val,index)=>{
                    return <div className="box" key={index} >
                        <button className="btn3">{val.list}Listings</button>
                        <div className="details">
                          <div className="img">
                          <img src={val.cover} alt="" />
                          <i className="fa fa-circle-check"></i>
                          </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
      </section>
    </>
  );
};
