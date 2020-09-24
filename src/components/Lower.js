import React from "react";
import registry from '../assets/registry.png';
import map from '../assets/map.png';

export default function Lower() {
  return (
    <div className="main-wrapper" id="features">
      <div className="top-wrapper">
        <div className="first-section">
          <h2>One Stop Ventilator Registry</h2>
          <p>
            Benefit from having your entire network's ventilator supply in one
            central database. With a bird's eye view, your network can
            make critical decisions that will help save lives.
          </p>
        </div>
        <img className="images" src={registry} alt="registry window"/>
      </div>
      <div className="bottom-wrapper">
      <img className="images" src={map} alt="registry window"/>
        <div className="second-section">
          <h2>Visibility, Data, Insight</h2>
          <p>
            Real time mapping and data analysis tools for querying will allow
            your network to have critical insights. Empowered with this information, you can make better-informed decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
