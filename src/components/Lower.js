import React from "react";
import registry from '../assets/registry.png';

export default function Lower() {
  return (
    <div className="main-wrapper">
      <div className="top-wrapper">
        <div className="first-section">
          <h2>One Stop Ventilator Registry</h2>
          <p>
            Benefit from having your entire network's ventilator supply in one
            central database. With a bird's eye view, your network can
            make critical decisions that will help save lives.
          </p>
        </div>
        <img src={registry} alt="registry window" />
      </div>
      <div className="bottom-wrapper">
        <div className="second-section">
          <h2>Visibility, Data, Insight</h2>
          <p>
            Real time mapping and data analysis tools for querying will allow
            your network to have critical insights. Empowered with this information, you can better educated decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
