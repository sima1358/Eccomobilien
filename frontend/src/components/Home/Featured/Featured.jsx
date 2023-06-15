import React from "react";
import "./featured.css";
import { Heading } from "../../Heading/Heading";
import { FeatureCard } from "./FeatureCard";

export const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
          {/* *********** */}
          {/* uses 'Heading component in order to use the styling of it */}
          <Heading
            //   **********
            //   title and subtitle of features
            title="Featured Property Types"
            subtitle="Find All Types of Property"
          />
          {/* *********** */}
          {/* insert featured card to show home and villa and office card */}
          <FeatureCard />
        </div>
      </section>
    </>
  );
};
