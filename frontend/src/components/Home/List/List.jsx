import React from "react";
import { Heading } from "../../Heading/Heading";
import { ListCard } from "./ListCard";
import './list.css'

export const List = () => {
  return (
    <section className="list padding">
      <div className="container">
        <Heading
          title="Recent Property Listed"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <ListCard/>
      </div>
    </section>
  );
};
